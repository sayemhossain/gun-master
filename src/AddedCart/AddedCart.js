import React from "react";

const AddedCart = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.item.name}</h1>
    </div>
  );
};

export default AddedCart;
