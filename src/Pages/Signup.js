import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: input.email,
      password: input.password,
      confirmpassword: input.confirmpassword,
    };
    axios
      .post("http://localhost:8080/usersignup", payload)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="border px-5 mt-5">
          <div>
            <form className="mb-5" onSubmit={handleSubmit}>
              <h2 className="text-center my-5">User Side Signup</h2>
              <div className="form-group">
                <label>Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  value={input.confirmpassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <NavLink to="/login">
                  <a href="/">Already a User? CLick to LogIn</a>
                </NavLink>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-danger">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
