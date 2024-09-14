import React from "react";

export default function Modal({title,description,image}) {
  return (
    <div className="container1">
      <div className="texts">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <button>Button Text</button>
      </div>
      <img src={image} alt="تصویر" />
    </div>
  );
}
