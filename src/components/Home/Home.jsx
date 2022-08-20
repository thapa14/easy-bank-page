import React, { useEffect, useState } from "react";
import "./Home.css";
import phone from "../../images/image-mockups.png";

function Home() {

  return (
    <div className="home">
      <div className="container h  d-flex flex-column-reverse flex-sm-row  justify-content-center  ">
        <div className="left-side w-100 w-sm-50 d-flex flex-column justify-content-center align-items-center align-items-sm-start mt-5 mt-sm-0">
          <div className="h-heading">
            <h1>Next generation</h1>
            <h1>digital banking</h1>
          </div>
          <p className="para-style h-para text-center text-sm-start mt-4">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <button className="link-btn mt-4">Request Invite</button>
        </div>
        <div className="right-side w-100 w-sm-50 text-center">
          <img className="h-img" src={phone} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
