import React from "react";

export default function Comments({image,title,comment}) {
  return (
    <div className="commentsCarousel">
      <div className="carousel-container">
        <div className="carousel">
          {/* <!-- کارت اول --> */}
          <div className="card">
            <img src={image} alt="کاربر 1" />
            <h3>{title}</h3>
            <p>
            {comment}
            </p>
          </div>

        </div>

        <div className="carousel-controls">
          <button id="prevBtn">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button id="nextBtn">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
