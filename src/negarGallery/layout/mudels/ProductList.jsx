import React from 'react'

export default function ProductList({image,alt,productTitle,productPrice}) {
  return (
 
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="product-card">
            <img src={image} alt={alt} className="product-image"/>
            <div className="product-title">{productTitle}</div>
            <div className="product-price">{productPrice}</div>
          </div>
        </div>
  )
}
