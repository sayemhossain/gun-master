import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  const { img, name, action, bullet, category, price } = props.product;
  return (
    <div className="card-container my-5">
      <div className="card text-center ">
        <div className="image-container">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title ">{name}</h5>
          <p className="my-1 text-success fw-bold">{category}</p>
          <div className="my-4">
            <p className="my-1">Action: {action}</p>
            <p className="my-1">Bullet: {bullet}</p>
            <p className="my-1">Price: ${price}</p>
          </div>
          <div className="">
            <a href="#" className="btn btn-dark ">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
