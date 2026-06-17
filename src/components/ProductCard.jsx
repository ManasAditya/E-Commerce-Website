import { supabase } from "../supabase";

function ProductCard({

  id,
  image,
  name,
  price,
  rating,
  badge

}) {

  async function addToCart() {

    // Check if product already exists in cart
    const { data } = await supabase
      .from("cart")
      .select("*")
      .eq("product_id", id)
      .maybeSingle();

    if (data) {

      await supabase
        .from("cart")
        .update({
          quantity: data.quantity + 1,
        })
        .eq("id", data.id);

    } else {

      await supabase
        .from("cart")
        .insert({
          product_id: id,
          quantity: 1,
        });

    }

    alert("Product Added To Cart ✅");
  }

  return (

    <div className="productCard">

      <div className="badge">
        {badge}
      </div>

      <div className="wishlist">
        ♡
      </div>

      <img
        src={image}
        alt={name}
      />

      <h2>
        {name}
      </h2>

      <p className="rating">
        {rating}
      </p>

      <h3>
        ₹{Number(price).toLocaleString("en-IN")}
      </h3>

      <div className="buttons">

        <button onClick={addToCart}>
          Add to Cart
        </button>

        <button>
          Buy Now
        </button>

      </div>

    </div>

  );

}

export default ProductCard;