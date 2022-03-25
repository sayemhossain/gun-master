import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Shop.css";
import Modal from "react-modal";
import AddedCart from "../AddedCart/AddedCart";

const Shop = (props) => {
  console.log(props);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    // console.log(newCart);
    setCart(newCart);
  };

  // console.log(cart);
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

      <Modal
        isOpen={props.modal}
        onRequestClose={props.closeModal}
        style={props.customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={props.closeModal}>Close</button>
        <div>
          {cart.map((item) => (
            <AddedCart key={item.id} item={item}></AddedCart>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Shop;
