import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../supabase";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data);
  }

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="productsPage">

      <h1 className="productsTitle">
        Featured Collection
      </h1>

      <p className="productsSubtitle">
        Designed for creators, gamers and innovators.
      </p>

      <div className="searchBox">

        <input
          type="text"
          placeholder="Search premium products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="productGrid">

        {filteredProducts.map((item) => (

          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            badge={item.badge}
            image={item.image}
          />

        ))}

      </div>

    </div>

  );

}

export default Products;