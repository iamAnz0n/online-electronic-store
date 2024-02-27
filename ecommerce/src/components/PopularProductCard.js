import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import data from "../db/ourpopular.json";
const PopularProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      {data.populars.map((popular) => (
        <div
          className={` ${
            location.pathname === "/product" ? `gr-${grid}` : "col-3"
          }`}
        >
          <Link
            to={`${
              location.pathname === "/"
                ? "/product/:id"
                : location.pathname === "/product/:id"
                ? "/product/:id"
                : ":id"
            }`}
            className="product-card position-relative"
          >
            <div key={popular.id}>
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img src="images/wish.svg" alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img src={popular.img} alt="product " />
                {/* <img src={popular.img} alt="product" /> */}
              </div>
              <div className="product-details">
                <h6 className="brand">{popular.company}</h6>
                <h5 className="product-title">{popular.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={popular.reviews}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                ></p>
                <p className="price">{popular.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="images/view.svg" alt="view" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src="images/add-cart.svg" alt="addcart" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PopularProductCard;
