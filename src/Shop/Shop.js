import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    console.log(newCart);
    setCart(newCart);
  };
  return (
    <div className="bg-secondary">
      <div className="container ">
        <div className="card-container">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
