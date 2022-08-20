import React from "react";

function Cards({ image, title, para }) {
  return (
    <div className="col-10 col-sm-3 mx-auto mx-md-0 mt-4  mx-auto">
      <div className="cards d-flex flex-column gap-4 text-center text-sm-start">
        <div className="card-img">
          <img src={image} alt="img" />
        </div>
        <div className="card-heading">
          <h3>{title}</h3>
        </div>
        <div className="card-about">
          <p className="para-style">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
