import React from "react";
import "./WhyEasyBank.css";
import Cards from "./Cards";
import cardsData from "./cards-data";

function WhyEasyBank() {
  return (
    <div className="wib">
      <div className="container d-flex flex-column gap-4 text-center text-sm-start">
        <h1>Why choose Easybank?</h1>
        <div className="wib-para">
          <p className="para-style  m-0">We leverage Open Banking to to turn your into financial hub. Control your finances like never before.</p>
        </div>
        <div className="wib-cards mt-5 ">
          <div className="row">
          {
            cardsData.map((value, index) => {
              return(
                <Cards key={index}
                image={value.image}
                title={value.title}
                para={value.para}/>
              )
            })
          }
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyEasyBank;
 