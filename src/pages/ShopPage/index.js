import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function ShopPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const shopResponse = await axios.get("http://localhost:4000/products");
      console.log("products", shopResponse);
      setProducts(shopResponse.data);
    }
    getProducts();
  }, []);
  return (
    <div>
      {products ? (
        products.map((product) => {
          const { id, title, price, description, rating, mainImage } = product;
          return (
            <ProductCard
              key={id}
              image={mainImage}
              productName={title}
              price={price}
              rating={rating}
              description={description}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ShopPage;
