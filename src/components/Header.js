import React from "react";
import { Link } from "react-router-dom";
import { signout } from "../api/API";
import $ from "jquery";


export default function Header(props) {
  $(".nav .nav-link").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
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
            <ul className="nav nav-pills me-auto mb-2 mb-lg-0 ">
              {localStorage.getItem("token") == null ? (
               <>
               <li className="nav-items">
                  <Link className="nav-link active" to="/signin">
                    Signin
                  </Link>
                </li>

               <li className="mx-2 nav-items">
                  <Link className="nav-link " to="/signup">
                    Signup
                  </Link>
                </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/favourite">
                      Cart
                      <span className="badge bg-secondary">
                        {props.favCount}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/orderlist">
                      Order List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                    Profile
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      onClick={() => signout()}
                      className="nav-link"
                      to="/signout"
                    >
                      Signout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
