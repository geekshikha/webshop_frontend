import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function ShopPage() {
  const [products, setProducts] = useState(null);

  // const [category, setCategory] = useState([]);
  const [filterItem, setFilterItem] = useState();

  useEffect(() => {
    async function getProducts() {
      const shopResponse = await axios.get("http://localhost:4000/products");
      console.log("products", shopResponse);
      setProducts(shopResponse.data);
    }
    getProducts();
  }, []);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!filterItem) {
      return products;
    }
    return products.filter((product) => product.category.title === filterItem);
  }

  // Avoid duplicate function calls with useMemo
  const filteredList = useMemo(getFilteredList, [filterItem, products]);

  // const filteredProducts =
  //   filterItem === "item"
  //     ? products
  //     : products.filter(
  //         (product) => product.categoryId === parseInt(filterItem)
  //       );

  // const sortedProducts = filteredProducts.sort((A, B) =>
  //   A.categorytitle.localeCompare(B.category.title)
  // );

  return (
    <div>
      <select onChange={(e) => setFilterItem(e.target.value)}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Jewelery">Jewelery</option>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        ))
      </select>
      {products ? (
        filteredList.map((product) => {
          const { id, title, price, description, rating, mainImage } = product;
          return (
            <ProductCard
              key={id}
              id={id}
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
