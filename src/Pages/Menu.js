import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import MenuCard from "../Components/MenuCard";

const Menu = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetchmenu();
  }, []);
  const fetchmenu = () => {
    axios.get("http://localhost:8080/AdminDashboard/MenuList").then((res) => {
      console.log(res.data);
      setMenu(res.data);
    });
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {menu?.map((item, index) => {
            return (
              <div className="col">
                <MenuCard
                  key={index}
                  img={`http://localhost:8080/public/images/${item.inputfile}`}
                  title={item.itemname}
                  ingredients={item.ingredients}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
