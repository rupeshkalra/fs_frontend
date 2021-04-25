import React ,{useState} from "react";
import { Redirect } from "react-router";
import { addItemToCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {

  const cardTitle= product ? product.name : "Title";
  const cardDescription= product ? product.description : "Description";
  const cardPrice= product ? product.price: "Price";

  const[redirect, setRedirect]=useState(false);
  const[count, setCount]=useState(product.count);
  
  const addTocart=()=>{
    addItemToCart(product,()=>{
      setRedirect(true);
    })
  }

  const getARedirect= redirect =>{
    if(redirect){
     return  <Redirect to="/cart"/>
    }
  }

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addTocart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
