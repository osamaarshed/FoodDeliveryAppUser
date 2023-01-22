import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Header from "../Components/Header";
import "./../Css/Cart.css";

const Cart = () => {
  //   const somevalue = "somevalue";
  // const [cartdata, setCartData] = useState({});
  // _id: "",
  // itemname: "",
  // ingredients: "",
  // price: "",
  // inputfile: "",
  //   useEffect(() => {
  //     const objid = localStorage.getItem("cartdata");
  //     const id = JSON.parse(objid);
  //     selectedProduct(id.id);
  //   }, []);

  //   const selectedProduct = (id) => {
  //     axios
  //       .get(`http://localhost:8080/AdminDashboard/MenuList${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         setCartData(res.data);
  //       });
  //   };
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const objid = localStorage.getItem("cartdata");
    const id = JSON.parse(objid);
    // console.log(id[0]);
    setData(id[0]);
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

  return (
    <div>
      <Header />
      <p>
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
          <Button variant="danger" onClick={handleSubmit}>
            Proceed to Checkout
          </Button>
        </div>
      </p>
    </div>
  );
};

export default Cart;
