import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Shop.css";
import Modal from "react-modal";
import AddedCart from "../AddedCart/AddedCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <div className="modal-container">
        <Modal
          isOpen={props.modal}
          onRequestClose={props.closeModal}
          style={props.customStyles}
          contentLabel="Example Modal"
        >
          <div className="text-end ">
            <FontAwesomeIcon
              className="bg-light text-danger px-3 py-2 rounded text-end cross"
              onClick={props.closeModal}
              icon={faXmark}
            />
          </div>
          <div>
            {cart.map((item) => (
              <AddedCart key={item.id} item={item}></AddedCart>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Shop;
