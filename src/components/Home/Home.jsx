import React, { useEffect ,useState } from "react";
import "./Home.css";
import phone from "../../images/image-mockups.png";

function Home() {
  
  return (
    <div className="home">
      <div className="container d-flex flex-column-reverse flex-sm-row align-items-center justify-content-sm-between h-100 pb-5 pb-sm-0">
        <div className=" d-flex align-items-sm-center h-sm-100 w-sm-50">
          <div className="home-details text-center text-sm-start">
            <div>
              <h1 className="m-0 display-5">Next generation</h1>
              <h1 className="m-0 display-5">digital banking</h1>
            </div>
            <p className="my-4 para-style">
              Take your financial life online. YOur Easybank accoubt will be a
              one-stop-shop for spending, saving, budgeting, spending,
              investing, and much more.
            </p>
            <button className="link-btn">Request Invite</button>
          </div>
        </div>
        <div className="h h-sm-100">
          <img className="bg-img" src={phone} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
