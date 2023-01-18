import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./../Css/MenuCard.css";

const MenuCard = (props) => {
  return (
    <div className="text-center my-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="menu-img" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="menu-ingredients">
            {props.ingredients}
          </Card.Text>
          <Card.Text> Price: {props.price}</Card.Text>
          <Button variant="danger">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuCard;
