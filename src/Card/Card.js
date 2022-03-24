import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  const { img } = props.product;
  return (
    <div className="card-container my-5">
      <div className="card">
        <div className="image-container">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
