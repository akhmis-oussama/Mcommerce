import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/cards'); // Update the URL accordingly
                setCards(response.data);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données de carte:', error);
            }
        };

        fetchCards();
    }, []);

    return (
        <div>
            <h2>Card List</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <p>User ID: {card.userId}</p>
                        <p>Date: {card.date}</p>
                        <p>Products:</p>
                        <ul>
                            {card.products.map((product) => (
                                <li key={product.productId}>
                                    Product ID: {product.productId}, Quantity: {product.quantity}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardList;
