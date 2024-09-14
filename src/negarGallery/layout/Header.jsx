import React, { useEffect } from 'react';
import style from './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(()=>{
    document.title = " محصولات | گالری نگار "
  },[])
    return (
        <div>
            {/* <!--Main Navigation--> */}
    <header className="mb-4">
      {/* <!-- Jumbotron --> */}
      <div className="p-3 text-center bg-white border-bottom">
        <nav className="navbar navbar-expand-lg custom-navbar" dir="rtl">
          <div className="container-fluid">
            <div className="dropdown">
              <Link
                className="btn dropdown-toggle "
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
                <img
                  src="assets/images/user2.jpg"
                  className="rounded-circle"
                  height="22"
                  alt=""
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><Link className="dropdown-item" to="#">صفحه کاربری من</Link></li>
                <li><Link className="dropdown-item" to="/admin">پنل ادمین</Link></li>
                <li><Link className="dropdown-item" to="/login">ورود</Link></li>
                <li><Link className="dropdown-item" to="#">خروج</Link></li>
              </ul>
            </div>
            <span className="d-none d-lg-inline-block">حساب کاربری من</span>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form
                className="d-flex input-group w-auto my-auto mb-3 mb-md-0"
                dir="ltr"
              >
                <input
                  autoComplete="off"
                  type="search"
                  id="nav-search-box"
                  className="form-control rounded serach-box"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar2 --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white d-lg-block">
        <div className="col-md-2 d-lg-block navbar-2">
          <Link to="/" className="ms-md-2">
            <img src="assets/images/logo.png" className="logo" height="55" />
          </Link>
        </div>
      </nav>

      {/* <!-- Navbar3 --> */}

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">خانه</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">صفحه محصول اولیه</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">محصولات</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">دسته بندی</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                زیر منو
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">یک</Link></li>
                  <li><Link className="dropdown-item" to="#">دو</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="#">سه</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    
        </div>
    );
}

export default Header;
