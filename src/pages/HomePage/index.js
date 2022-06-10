import { useState } from "react";

import ShopPage from "../ShopPage";
import Login from "../UserPage/LoginPage";

const HomePage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>{!isLoggedIn ? <Login handleLogin={setLoggedIn} /> : <ShopPage />}</>
  );
};

export default HomePage;
