import React from "react";
import Header from "../Components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center my-5">
          Welcome To <span className="text-danger">Food Delivery App</span>
        </h2>
        <p className="text-center">
          <span>Food Delivery App</span> is a Professional <span>Delivery</span>
          Platform. Here we will provide you only interesting content, which you
          will like very much. We're dedicated to providing you the best of
          <span>Delivery</span>, with a focus on dependability and
          <span>Food Delivery</span>. We're working to turn our passion for
          <span> Delivery</span> into a booming online website. We hope you
          enjoy our <span>Delivery</span> as much as we enjoy offering them to
          you.
        </p>
        <p className="text-center mt-2">
          I will keep posting more important posts on my Website for all of you.
          Please give your support and love.
        </p>
        <p className="mt-2" style={{ fontWeight: "bold", textAlign: "center" }}>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span
            style={{
              color: "blue",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Have a nice day!
          </span>
        </p>
      </div>
    </>
  );
};

export default About;
