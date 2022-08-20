import React from "react";
import ArticleCards from "./ArticleCards";
import "./Articles.css";
import articleData from "./Articles-data";


function Articles() {
  return (
    <div className="articles">
      <div className="container d-flex flex-column gap-4 text-center text-sm-start ">
        <h1>Latest Articles</h1>
        <div className="article-cards mt-4 ">
          <div className="row gy-3 gy-sm-0 gx-lg-5">
            {
              articleData.map((value, index) => {
                return (
                  <ArticleCards key={index}
                    image={value.image}
                    sub={value.sub}
                    title={value.title}
                    para={value.para} />
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
