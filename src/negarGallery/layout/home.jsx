import React, { useEffect } from "react";

import style from "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./mudels/Category";
import ProductList from "./mudels/ProductList";
import Modal from "./mudels/Modal";
import Comments from "./mudels/Comments";

const Home = () => {
  useEffect(() => {
    require("../../assets/js/js");
    document.title = "صفحه اصلی | گالری نگار ";
  }, []);
  return (
    <div>
      <Header />
      {/* <!--Main Navigation--> */}

      {/* <!--Main Navigation--> */}
      <main id="intro" className="bg-image">
        <h1 className="text-background">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quo.
        </h1>

        <span className="text-background2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quo.
        </span>

        <button type="button" className="btn btn-light">
          Light
        </button>
      </main>

      {/* <!--Main layout--> */}

      <div className="container my-5">
        <div className="row justify-content-center g-3 category-container">
          <Category image="/assets/images/2.jpg" alt="Category 1" />
          <Category image="/assets/images/3.jpg" alt="Category 2" />
          <Category image="/assets/images/4.jpg" alt="Category 3" />
          <Category image="/assets/images/5.jpg" alt="Category 4" />
        </div>
      </div>

      {/* <!-- /* product */}

      <div className="container my-4">
        <h2 className="heading1">محصولات اول</h2>
        <p className="heading2">Subheading</p>
        <div className="row g-3 product-row">
          {/* <!-- Product 1 --> */}
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 1"
            productPrice="1.000.000"
          />
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 2"
            productPrice="2.000.000"
          />
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 3"
            productPrice="3.000.000"
          />
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 4"
            productPrice="4.000.000"
          />
        </div>
      </div>
      {/* <!-- cart -->/ */}
      <Modal
        image="/assets/images/3.jpg"
        title="modal title"
        description="Description"
      />

      {/* <!-- product 2  --> */}
      <div className="container my-4">
        <h2 className="heading1">محصولات دوم</h2>
        <p className="heading2">Subheading</p>
        <div className="row g-3 product-row">
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 1"
            productPrice="1.000.000"
          />
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 1"
            productPrice="1.000.000"
          />
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 1"
            productPrice="1.000.000"
          />
          <ProductList
            image="https://via.placeholder.com/150"
            alt="product 1"
            productTitle="عنوان محصول 1"
            productPrice="1.000.000"
          />
        </div>
      </div>

      {/* <!-- comments --> */}
      <div className="container my-4">
        <h2 className="carouselHeding1">نظرات کاربران</h2>
        <p className="carouselHeding2">Subheading</p>
      </div>
      <Comments
        image="https://via.placeholder.com/80"
        title="نظر 1"
        comment="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure
              non, architecto placeat sit sunt."
      />

      <Footer />
    </div>
  );
};
export default Home;
