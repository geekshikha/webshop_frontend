import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./styles.css";

import { TbCurrencyEuro } from "react-icons/tb";
const ProductCard = ({
  image,
  productName,
  price,
  rating,
  description,
  id,
  handleClick,
}) => {
  // console.log("props:", props);

  console.log("proCardId:", id);
  const star = "⭐";

  return (
    <div className="box">
      <Link to={`/details/${id}`}>
        <div className="ProductCard-Container">
          <div className="ProductCard-Left">
            <img src={image} alt={productName} />
          </div>

          <div className="ProductCard-Right">
            <ul>
              <li className="ProductCard-productName">{productName}</li>
              <br />
              <div className="ProductCard-priceRating">
                <li className="ProductCard-price">
                  {<TbCurrencyEuro />}
                  {price}
                </li>
                <li className="ProductCard-rating">
                  {rating} {star.repeat(Math.round(rating))}
                </li>
              </div>
              <li className="ProductCard-description">{description}</li>

              <li>
                {" "}
                <BsCart
                  onClick={() =>
                    handleClick(
                      image,
                      productName,
                      price,
                      rating,
                      description,
                      id
                    )
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
