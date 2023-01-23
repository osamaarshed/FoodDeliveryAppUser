import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import MenuCard from "../Components/MenuCard";
import LoaderSpinner from "../Components/LoaderSpinner";

const Menu = () => {
  const [loader, setLoader] = useState(false);
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetchmenu();
  }, []);
  const fetchmenu = () => {
    setLoader(true);
    axios.get("http://localhost:8080/AdminDashboard/MenuList").then((res) => {
      console.log(res.data);
      setMenu(res.data);
      setLoader(false);
    });
  };
  // const cart = (data) => {
  //   localStorage.setItem("cartdata", data);
  // };
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          {menu?.map((item, index) => {
            return (
              <div className="col" key={index}>
                {loader ? (
                  <LoaderSpinner />
                ) : (
                  <MenuCard
                    img={`http://localhost:8080/public/images/${item.inputfile}`}
                    title={item.itemname}
                    ingredients={item.ingredients}
                    price={item.price}
                    addtocart={() => {
                      const obj = [
                        {
                          id: item._id,
                          itemname: item.itemname,
                          ingredients: item.ingredients,
                          price: item.price,
                          inputfile: item.inputfile,
                        },
                      ];
                      const stringObj = JSON.stringify(obj);
                      localStorage.setItem("cartdata", stringObj);
                      alert("Added To Cart");
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
