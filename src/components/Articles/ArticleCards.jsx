import React from "react";

function ArticleCards({image, sub, title, para}) {
  return (
    <div className="col-11 mx-auto col-sm-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body p-4 d-flex flex-column gap-2">
          <h6 className="card-subtitle mb-2 text-muted">{sub}</h6>
          <h4 className="card-title">
            {title}
          </h4>
          <p className="card-text">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCards;
