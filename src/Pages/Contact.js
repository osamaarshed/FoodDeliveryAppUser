import React, { useState } from "react";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const changeHandler = (e) => {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    // console.log(data);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      name: data.name,
      subject: data.subject,
      message: data.message,
    };
    axios
      .post("http://localhost:8080/contact", payload)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center mt-5">Contact Us!</h1>
        <div>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={data.name}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={data.subject}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Label>Message</Form.Label>
            <FloatingLabel>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                name="message"
                value={data.message}
                onChange={changeHandler}
              />
            </FloatingLabel>

            <Button className="mt-3" variant="danger" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
