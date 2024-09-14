import React from 'react';
import style from './style.css';

const Footer = () => {
    return (
        <div>
        {/* <!-- Footer --> */}
  <footer
          className="text-center text-lg-start text-white"
      
           dir="rtl">
    {/* <!-- Section: Social media --> */}
    <section
             className="d-flex justify-content-between p-4 footer-section"
    
             >
      {/* <!-- Left --> */}
      <div className="me-5">
        <span>مارا در شبکه های اجتماعی دنبال کنید:</span>
      </div>
      {/* <!-- Left --> */}

      {/* <!-- Right --> */}
      <div>
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
      {/* <!-- Right --> */}
    </section>
    {/* <!-- Section: Social media --> */}

    {/* <!-- Section: Links  --> */}
    <section className="">
      <div className=" text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* <!-- Content --> */}
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto footer-hr"
           
                />
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, aspernatur laudantium. Illum nihil dolorum id consequatur nisi rerum. Ipsam, obcaecati?
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto footer-hr"
            
                
                />
            <p>
              <a href="#!" className="text-white">first Products</a>
            </p>
            <p>
              <a href="#!" className="text-white">first Products</a>
            </p>
            <p>
              <a href="#!" className="text-white">first Products</a>
            </p>
            <p>
              <a href="#!" className="text-white">first Products</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto footer-hr"
             
                />
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto footer-hr"
              
                />
            <p><i className="fas fa-home mr-3"></i> اصفهان، خیابان چهارباغ</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> 0995874652</p>
            <p><i className="fas fa-print mr-3"></i> 0995874652</p>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
    </section>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> */}
    <div
         className="text-center p-3"
     
         >
      ©  Copyright: negar-gallery
    
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
  
        </div>
    );
}

export default Footer;
