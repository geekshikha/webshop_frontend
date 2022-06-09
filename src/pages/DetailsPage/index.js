import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { TbCurrencyEuro } from "react-icons/tb";
// import { AiFillStar } from "react-icons/ai";
import "./styles.css";

const DetailsPage = () => {
  const [details, setDetails] = useState(null);
  // const [stars, setStars] = useState([]);

  const params = useParams();
  console.log("productId:", params);

  useEffect(() => {
    const fetchById = async () => {
      try {
        const response = await axios.get(
          ` http://localhost:4000/products/${params.id} `
        );
        console.log("Am I getting details?", response);
        setDetails(response.data);
      } catch (error) {}
    };
    fetchById();
  }, []);

  const star = "⭐";

  return (
    <>
      <div className="productDetails">
        {!details ? (
          "Loading..."
        ) : (
          <div className="productDescription">
            <img src={details.mainImage} alt="product" />
            <div className="productinfo">
              <h3>{details.title}</h3>

              <h4>
                {details.rating} {star.repeat(Math.round(details.rating))}
              </h4>
              <h4>
                {<TbCurrencyEuro />}
                {details.price}
              </h4>
              <p>{details.description}</p>
            </div>
          </div>
        )}
        <button className="addto">
          <BsCart /> Add to cart
        </button>
        <button className="fav">
          <AiOutlineHeart /> Favourite
        </button>
      </div>
      <div className="additionalInfo">
        <div className="extraHeading">
          <h5>Description</h5>
          <h5>AdditionalInfo</h5>
          <h5>Reviews</h5>
        </div>

        <h4>Various tempor.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          excepturi nisi voluptates vel, aspernatur repudiandae quod possimus
          optio illo molestias nam, recusandae deleniti voluptatem ea obcaecati,
          architecto provident eum omnis!
        </p>
        <h4>More Details</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          itaque aliquam error placeat nostrum ex, omnis debitis ipsa? Optio a
          aut consectetur sed est.
        </p>
      </div>
    </>
  );
};

export default DetailsPage;
