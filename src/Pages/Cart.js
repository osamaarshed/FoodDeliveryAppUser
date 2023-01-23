import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import "./../Css/Cart.css";

const Cart = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  // const objid = localStorage.getItem("cartdata");
  // const [objid, setObjid] = useState(localStorage.getItem("cartdata"));

  useEffect(() => {
    const objid = localStorage.getItem("cartdata");
    if (objid) {
      const id = JSON.parse(objid);
      setData(id[0]);
    } else {
      return;
    }
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      productId: data.id,
      productName: data.itemname,
      productPrice: data.price * count,
      productQuantity: count,
    };
    axios
      .post("http://localhost:8080/orders", payload)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEmptyCart = () => {
    localStorage.removeItem("cartdata");
    alert("Cart Emptied");
    navigate("/cart");
  };

  return (
    <div>
      <Header />
      {localStorage.getItem("cartdata") ? (
        <>
          <div className="container mt-5 bg-dark text-white p-3">
            <div className="row text-center align-items-center">
              <div className="col-2">
                <img
                  className="cart-img"
                  src={`http://localhost:8080/public/images/${data.inputfile}`}
                  alt=""
                />
              </div>
              <div className="col-2 ">
                Product ID: <br />
                {data.id}
              </div>
              <div className="col-2 ">
                Product Name: <br />
                <span className="cart-overflow">{data.itemname}</span>
              </div>
              <div className="col-2">
                Product Ingredients: <br />
                {data.ingredients}
              </div>
              <div className="col-2">
                Product price: <br /> {data.price}
              </div>
              <div className="col-2 ">
                Quantity: <br />
                <div className="row align-items-center">
                  <div className="col">
                    <Button onClick={handleIncrement}>+</Button>
                  </div>
                  <div className="col">{count}</div>
                  <div className="col">
                    <Button onClick={handleDecrement}>-</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center mt-2">
            <Button className="me-1" variant="danger" onClick={handleSubmit}>
              Proceed to Checkout
            </Button>
            <Button variant="danger" onClick={handleEmptyCart}>
              Empty Cart
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center mt-5">Cart is Empty</h1>
        </>
      )}

      {/* <div className="container mt-5 bg-dark text-white p-3">
        <div className="row text-center align-items-center">
          <div className="col-2">
            <img
              className="cart-img"
              src={`http://localhost:8080/public/images/${data.inputfile}`}
              alt=""
            />
          </div>
          <div className="col-2 ">
            Product ID: <br />
            {data.id}
          </div>
          <div className="col-2 ">
            Product Name: <br />
            <span className="cart-overflow">{data.itemname}</span>
          </div>
          <div className="col-2">
            Product Ingredients: <br />
            {data.ingredients}
          </div>
          <div className="col-2">
            Product price: <br /> {data.price}
          </div>
          <div className="col-2 ">
            Quantity: <br />
            <div className="row align-items-center">
              <div className="col">
                <Button onClick={handleIncrement}>+</Button>
              </div>
              <div className="col">{count}</div>
              <div className="col">
                <Button onClick={handleDecrement}>-</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-2">
        <Button className="me-1" variant="danger" onClick={handleSubmit}>
          Proceed to Checkout
        </Button>
        <Button variant="danger" onClick={handleEmptyCart}>
          Empty Cart
        </Button>
      </div> */}
    </div>
  );
};

export default Cart;
