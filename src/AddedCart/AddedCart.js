import React from "react";
import "./AddedCart.css";

const AddedCart = (props) => {
  const { img, name, price } = props.item;
  return (
    <div className="bg-dark p-3 m-3 added-cart">
      <img src={img} alt="" />
      <div className="text-center">
        <h4 className="text-secondary">{name}</h4>
        <h5 className="text-secondary">
          price: <span className="text-danger">${price}</span>
        </h5>
      </div>
    </div>
  );
};

export default AddedCart;
