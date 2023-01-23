import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: input.email,
      password: input.password,
    };
    axios
      .post("http://localhost:8080/userlogin", payload)
      .then((response) => {
        alert(response.data.message);
        if (response.data.user) {
          localStorage.setItem("userJwtToken", response.data.token);
          navigate("/menu");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    // console.log(input);
  };
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="border px-5 mt-5">
          <div>
            <form className="mb-5" onSubmit={handleSubmit}>
              <h2 className="text-center my-5">User Side Login</h2>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <div className="col-6 form-check mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Remember Password</label>
                </div>
                <div className="col-6 mt-3">
                  <Link className="notDisabled">
                    <p>Forgot Password?</p>
                  </Link>
                </div>

                {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Forgot Password?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        Enter your email to reset password:
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal> */}
              </div>
              <div className="text-center mt-3">
                <NavLink to="/signup">
                  <a href="/">Register</a>
                </NavLink>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
