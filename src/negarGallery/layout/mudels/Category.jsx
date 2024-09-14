import React from "react";

export default function Category({image,alt}) {
  return (
  
      <>
      {/* <!--Main layout--> */}

          {/* <!-- Category 1 --> */}
          <div className="col col-md-2">
            <img
              src={image}
              alt={alt}
              className="category-img"
            />
          </div>
      </>
  );
}
