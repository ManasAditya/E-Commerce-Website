import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? "activeLink" : "";
  };

  useEffect(() => {
    fetchCartCount();

    // optional live refresh when tab changes
    const interval = setInterval(() => {
      fetchCartCount();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  async function fetchCartCount() {
    const { data, error } = await supabase
      .from("cart")
      .select("quantity");

    if (error) {
      console.log(error);
      return;
    }

    const total = data.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);

    setCartCount(total);
  }

  return (
    <header className="navbar">

      <div className="navLogo">
        <span className="logoText">ShopMe</span>
      </div>

      <nav className="navMenu">

        <Link to="/" className={isActive("/")}>
          Home
        </Link>

        <Link to="/products" className={isActive("/products")}>
          Products
        </Link>

        <Link to="/cart" className={isActive("/cart")}>
          Cart
        </Link>

        <Link to="/about" className={isActive("/about")}>
          About
        </Link>

      </nav>

      <div className="navRight">

        <button className="searchBtn">
          🔍
        </button>

        <Link to="/cart">
          <button className="cartBtn">
            🛒
            <span className="cartCount">
              {cartCount}
            </span>
          </button>
        </Link>

        <button className="shopNowBtn">
          Shop Now
        </button>

      </div>

    </header>
  );
}

export default Navbar;