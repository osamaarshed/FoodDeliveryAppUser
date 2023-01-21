import React, { useState, useEffect } from "react";
// import axios from "axios";
import Header from "../Components/Header";

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
  useEffect(() => {
    const objid = localStorage.getItem("cartdata");
    const id = JSON.parse(objid);
    // console.log(id[0]);
    setData(id[0]);
  }, []);
  return (
    <div>
      <Header />
      <p>
        Product ID: {data.id} <br />
        Product Name: {data.itemname} <br />
        Product Ingredients: {data.ingredients} <br />
        Product price: {data.price} <br />
      </p>
    </div>
  );
};

export default Cart;
