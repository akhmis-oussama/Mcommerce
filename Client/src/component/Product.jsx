import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import Modal from "react-modal";

const customModalStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "450px",
    width: "80%",
    height: "40%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
  successMessage: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "120px",
  },
  closeButton: {
    display: "block",
    margin: "auto",
    marginTop: "10px",
    padding: "10px",
  },
};

const Product = () => {
  const [commandeModalIsOpen, setCommandeModalIsOpen] = useState(false);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const handleCommandeSubmit = async (product) => {
    try {
      const commande = {
        id: 1,
        datePaiement: Date.now(),
        idProduct: product._id,
      };

      const response = await axios.post(
        "http://localhost:5001/api/commandes",
        [commande]
      );

      setOrderId(response.data[0]._id);
      setError(null);
      setCommandeModalIsOpen(true);
    } catch (error) {
      console.error("Erreur lors de la création de la commande:", error);
      setOrderId(null);
      setError(error.message);
      setCommandeModalIsOpen(true);
    }
  };

  const handlePayment = async () => {
    try {
      await axios.post("http://localhost:5002/api/paiements", {
        commandeId: orderId,
        montant: product.prix,
      });

      setPaymentModalIsOpen(true);
      console.log("Le paiement a été effectué avec succès");
    } catch (error) {
      console.error("Erreur lors du paiement :", error.message);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const handleCommandeModalClose = () => {
    setCommandeModalIsOpen(false);
    setPaymentModalIsOpen(false);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.titre} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.titre}</h1>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="display-6 fw-bold">{product.prix}$</h3>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
          </div>
          <div className="product-description-box">
            <div className="box-square">
              <p className="lead">{product.description}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Link
              to="#"
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => handleCommandeSubmit(product)}
            >
              Order
            </Link>
            <Link to="/products" className="btn btn-outline-dark px-4 py-2">
              Go back
            </Link>
          </div>
          {orderId && (
            <Modal
              isOpen={commandeModalIsOpen}
              onRequestClose={handleCommandeModalClose}
              style={customModalStyles}
            >
              <p style={customModalStyles.successMessage}>
                The Order is successfully placed 
              </p>
              <p style={customModalStyles.successMessage}>
                The ID of your order is :{" "}
                {orderId}
              </p>
              <div style={customModalStyles.buttonContainer}>
                <button
                  className="d-flex justify-content-center btn btn-secondary p-3 text-center"
                  onClick={handleCommandeModalClose}
                >
                  Cancel
                </button>
                <br />
                <br />
                <button
                  className="d-flex justify-content-center btn btn-secondary p-3 text-center"
                  onClick={handlePayment}
                >
                  Pay my order
                </button>
              </div>
            </Modal>
          )}
          <Modal
            isOpen={paymentModalIsOpen}
            onRequestClose={handleCommandeModalClose}
            style={customModalStyles}
          >
            <p style={customModalStyles.successMessage}>
              The order has been paid successfully.
              <br />
              The ID of your order is : {orderId}
              <br />
              Paid Amount is : {product.prix}
            </p>
            <button
              className="btn btn-secondary p-3 text-center"
              style={customModalStyles.closeButton}
              onClick={handleCommandeModalClose}
            >
              Close
            </button>
          </Modal>
        </div>
      </>
    );
  };

  return (
    <div>
      <style>
        {`
          .box-square {
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 10px;
            background-color: #fff;
          }
        `}
      </style>
      <div className="container py-5" style={{ marginTop: "70px" }}>
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;