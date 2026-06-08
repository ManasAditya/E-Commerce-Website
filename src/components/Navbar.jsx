import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "activeLink" : "";
  };

  return (
    <header className="navbar">

      <div className="navLogo">
        <span className="logoText">ShopMe</span>
      </div>

      <nav className="navMenu">

        <Link
        to="/"
          className={isActive("/")}
        >
          Home
        </Link>

        <Link
        to="/products"
          className={isActive("/products")}
        >
          Products
        </Link>

        <Link
        to="/cart"
          className={isActive("/cart")}
        >
          Cart
        </Link>

        <Link
        to="/about"
          className={isActive("/about")}
        >
          About
        </Link>

      </nav>

      <div className="navRight">

        <button className="searchBtn">
          🔍
        </button>

        <button className="cartBtn">
          🛒
          <span className="cartCount">
            0
          </span>
        </button>

        <button className="shopNowBtn">
          Shop Now
        </button>

      </div>

    </header>
  );
}

export default Navbar;