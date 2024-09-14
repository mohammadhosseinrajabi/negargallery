import React, { useEffect } from 'react';
import style from './style.css';
import Header from './Header';
import Footer from './Footer';
const Product = () => {
    
  useEffect(()=>{

    document.title = " محصول | گالری نگار ";
  },[])
  return (
    <div>
      <Header />
      <div className="container product-container">
        <div className="row">
          <div id="carouselExample" className="carousel slide col-md-6 order-md-1" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/assets/images/2.jpg" alt="محصول 1" className="img-fluid" />
              </div>
              <div className="carousel-item">
                <img src="/assets/images/4.jpg" alt="محصول 2" className="img-fluid" />
              </div>
              <div className="carousel-item">
                <img src="/assets/images/3.jpg" alt="محصول 3" className="img-fluid" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <i className="fas fa-chevron-left arrow-icon-left"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <i className="fas fa-chevron-right arrow-icon-right"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="col-md-6 order-md-2">
            <h1 className="titleProduct">عنوان محصول</h1>
            <p className="priceText">قیمت: 100,000 تومان</p>
            <span className="titleProduct2">افسانه پلویی</span>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="selector1" className="form-label">انتخاب اول</label>
                <select className="form-select" id="selector1">
                  <option selected>گزینه 1</option>
                  <option value="1">گزینه 2</option>
                  <option value="2">گزینه 3</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="selector2" className="form-label">انتخاب دوم</label>
                <select className="form-select" id="selector2">
                  <option selected>گزینه 1</option>
                  <option value="1">گزینه 2</option>
                  <option value="2">گزینه 3</option>
                </select>
              </div>
            </div>
            <button type="button" className="btn btn-primary rounded-pill shopBtn">خرید</button>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    عنوان ۱
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نااسا مورد استفاده قرار گیرد.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    عنوان ۲
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نااسا مورد استفاده قرار گیرد.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    عنوان ۳
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نااسا مورد استفاده قرار گیرد.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Product;
