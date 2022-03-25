import React from "react";
import "./AddedCart.css";

const AddedCart = (props) => {
  const { img, name, price } = props.item;
  return (
    <div className="bg-dark text-white p-3 m-3 added-cart">
      <img src={img} alt="" />
      <div className="text-center">
        <h4>{name}</h4>
        <h5>price: ${price}</h5>
      </div>
    </div>
  );
};

export default AddedCart;
