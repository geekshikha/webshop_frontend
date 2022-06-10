import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/index.js";
import ShopPage from "./pages/ShopPage/index.js";
import HomePage from "./pages/HomePage/index.js";
import NavBar from "./components/NavBar/index.js";
import Banner from "./components/HeroBanner/index.js";
import "./components/NavBar/styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <h1>Welcome to my webshop</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
