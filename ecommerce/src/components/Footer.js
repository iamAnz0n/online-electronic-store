import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Biratnagar 7401,Nepal
                </address>
                <Link
                  href="tel:+977 9810425386"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +977 9810425386
                </Link>
                <Link
                  href="mailto:sardaraman050@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  sardaraman050@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-4">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className=" col-12 mb-0 text-white">
              <p className="text-center">
                &copy;{new Date().getFullYear()} Powered by<br></br> Merin
                <br></br>Anjan<br></br>Ankit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
