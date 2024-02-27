import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import TV from "../images/tv.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name"> DigiWorld</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li classname="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    &nbsp;Information
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    &nbsp;Shipping
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    &nbsp;Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Anjan Sardar (user123@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between "
              >
                <div className="w-100">
                  <select
                    name=""
                    id=""
                    className="form-control form-select text-dark bg-white"
                  >
                    <option value="nepal" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  ></input>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  ></input>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment,Suite, etc(optional)"
                    className="form-control"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <select
                    name=""
                    id=""
                    className="form-control form-select text-dark bg-white"
                  >
                    <option value="" selected disabled>
                      Select Province
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  ></input>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <IoMdArrowBack className="me-2" />
                      Return To Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue To Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex mb-2 gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src="https://www.infotechsnepal.com/wp-content/uploads/2023/05/Acer-Aspire-5.jpg" alt=""></img>
                  </div>
                  <div>
                    <h5 className="total-price">Acer Aspire 5</h5>
                    <p className="total-price">Steel Gray</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total-price">NPR 76,500.00</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">NPR 76,500.00</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total ">Shipping</p>
                <p className="mb-0 total-price">NPR 100</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">NPR 76,600.00</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
