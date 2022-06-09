import React from "react";
import "./styles.css";

import { TbCurrencyEuro } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
// import { ImStarEmpty } from "react-icons/im";

const ProductCard = ({ image, productName, price, rating, description }) => {
  return (
    <div className="box">
      {/* <h2>ProductCard</h2> */}
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
                {<AiFillStar className="ProductCard-rating-icons" />}
                {<AiFillStar className="ProductCard-rating-icons" />}
                {<AiFillStar className="ProductCard-rating-icons" />}
                {<AiFillStar className="ProductCard-rating-icons" />}
                {<AiFillStar className="ProductCard-rating-empty" />}
                {/* {rating} */}
              </li>
            </div>
            <li className="ProductCard-description">{description}</li>

            <li> {/* <div className="ProductCard-icons ">{icons}</div> */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
