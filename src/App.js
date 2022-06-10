import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/index.js";
import ShopPage from "./pages/ShopPage/index.js";
import HomePage from "./pages/HomePage/index.js";
import NavBar from "./components/NavBar/index.js";
import Banner from "./components/HeroBanner/index.js";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import "./components/NavBar/styles.css";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./pages/UserPage/RegisterPage";
import { useState } from "react";

function App() {
  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <h1>Welcome to my webshop</h1> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={<ShopPage cart={cart} handleClick={handleClick} />}
        />
        <Route
          path="/details/:id"
          element={<DetailsPage cart={cart} handleClick={handleClick} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
