import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
        
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;