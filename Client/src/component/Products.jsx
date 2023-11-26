import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const bannerStyle = {
  height: '40vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundImage: 'url("/assets/b2.jpg")',
  backgroundSize: 'cover',
  padding: '14px',
  color: 'white', 
  marginBottom: '20px',
  fontSize: '24px',
};

const subtitleStyle = {
  fontSize: '16px',
  opacity: 0.7,
};

export default function Products() {
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const jsonData = await response.json();
        setFilter(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const Loading = () => {
    return <>Loading ...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-4">
          <div className="category-button-style me-2">
            <button className="btn btn-outline-dark">All</button>
          </div>
          <div className="category-button-style me-2">
            <button className="btn btn-outline-dark">Clothing</button>
          </div>
          <div className="category-button-style me-2">
            <button className="btn btn-outline-dark">Accessories</button>
          </div>
          <div className="category-button-style">
            <button className="btn btn-outline-dark">Electronics</button>
          </div>
        </div>
        <div className="row justify-content-center">
          {filter.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4 position-relative" style={{ marginTop: '20px' }}>
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt={product.titre}
                  style={{ maxHeight: '200px' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="flex-grow-1">
                    <h5 className="card-title mb-2">
                      {product.titre && product.titre.substring(0, 12)}
                    </h5>
                    <p className="card-text small text-muted mb-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <p className="card-text lead fw-bold mb-0">
                      $ {product.prix}
                    </p>
                    <Link to={`/products/${product._id}`} className="btn btn-outline-dark">
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <section style={bannerStyle}>
              <p>Save more with coupons & up to 70% off!</p>
            </section>
            <hr />
            <h1 className="display-6 fw-bolder text-center">Featured Products</h1>
            <h5 className="display-6 fw-bolder text-center" style={subtitleStyle}>
              Latest collection, Popular, well rated
            </h5>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
