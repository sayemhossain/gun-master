import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Shop.css";
import Modal from "react-modal";
import AddedCart from "../AddedCart/AddedCart";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  // this is for modal
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  // console.log(cart);
  return (
    <div className="bg-secondary">
      <div className="container ">
        <button onClick={openModal}>Open Modal</button>
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
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
