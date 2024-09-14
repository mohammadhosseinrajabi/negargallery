import React from 'react'
import style from './style.css';
import Header from './Header';
import Footer from './Footer';

const Products=()=> {
  return (
    <div>
  <Header />
  <div className="container mt-5">
      <div className="row">
          {/* <!-- بخش نمایش محصولات --> */}
          <div className="col-md-8">
              <h2 dir="rtl">محصولات</h2>
              {/* <!-- لیست محصولات --> */}
              <div className="row g-3 product-row">
                {/* <!-- Product 1 --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 1" className="product-image"/>
                    <div className="product-title">عنوان محصول 1</div>
                    <div className="product-price">100,000 تومان</div>
                  </div>
                </div>
                {/* <!-- Product 2 --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 2" className="product-image"/>
                    <div className="product-title">عنوان محصول 2</div>
                    <div className="product-price">200,000 تومان</div>
                  </div>
                </div>
                {/* <!-- Product 3 --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 3" className="product-image"/>
                    <div className="product-title">عنوان محصول 3</div>
                    <div className="product-price">150,000 تومان</div>
                  </div>
                </div>
                {/* <!-- Product 4 --> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 4" className="product-image"/>
                    <div className="product-title">عنوان محصول 4</div>
                    <div className="product-price">300,000 تومان</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 4" className="product-image"/>
                    <div className="product-title">عنوان محصول 4</div>
                    <div className="product-price">300,000 تومان</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 4" className="product-image"/>
                    <div className="product-title">عنوان محصول 4</div>
                    <div className="product-price">300,000 تومان</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 4" className="product-image"/>
                    <div className="product-title">عنوان محصول 4</div>
                    <div className="product-price">300,000 تومان</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="product-card">
                    <img src="https://via.placeholder.com/150" alt="Product 4" className="product-image"/>
                    <div className="product-title">عنوان محصول 4</div>
                    <div className="product-price">300,000 تومان</div>
                  </div>
                </div>
              </div>
         
          </div>
          {/* <!-- بخش فیلترهای آکاردئونی --> */}
          <div className="col-md-4" dir="rtl">
              <h2 dir="rtl">فیلتر ها</h2>
              <div className="accordion" id="productFilters">
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             فیلتر رنگ
                          </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#productFilters">
                          <div className="accordion-body">
                              <input type="checkbox" id="filter1"/> Option 1<br/>
                              <input type="checkbox" id="filter2"/> Option 2<br/>
                              <input type="checkbox" id="filter3"/> Option 3
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              فیلتر سایز
                          </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#productFilters">
                          <div className="accordion-body">
                              <input type="checkbox" id="filter4"/> Option 4<br/>
                              <input type="checkbox" id="filter5"/> Option 5<br/>
                              <input type="checkbox" id="filter6"/> Option 6
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              فیلتر ابعاد
                          </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#productFilters">
                          <div className="accordion-body">
                              <input type="checkbox" id="filter7"/> Option 7<br/>
                              <input type="checkbox" id="filter8"/> Option 8<br/>
                              <input type="checkbox" id="filter9"/> Option 9
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <Footer/>
    </div>
  )
}
export default Products;
