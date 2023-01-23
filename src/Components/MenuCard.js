import React from "react";
// import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./../Css/MenuCard.css";

const MenuCard = (props) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const loginToOrder = () => {
    navigate("/login");
  };
  const jwttoken = localStorage.getItem("userJwtToken");

  return (
    <>
      <div className="text-center my-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="menu-img" variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="menu-ingredients text-truncate">
              {props.ingredients}
            </Card.Text>
            <Card.Text> Price: {props.price}</Card.Text>

            {jwttoken ? (
              <>
                <Button variant="danger" onClick={props.addtocart}>
                  Select
                </Button>
              </>
            ) : (
              <Button variant="danger" onClick={loginToOrder}>
                Login to Order
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>

      {/* Modal */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default MenuCard;
