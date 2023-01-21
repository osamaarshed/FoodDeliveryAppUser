import React from "react";
import Spinner from "./../Images/spin.gif";

const LoaderSpinner = () => {
  return (
    <div className="text-center">
      <img src={Spinner} alt="loading" />
    </div>
  );
};

export default LoaderSpinner;
