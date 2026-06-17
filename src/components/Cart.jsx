import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    setLoading(true);

    const { data: cartData, error: cartError } = await supabase
      .from("cart")
      .select("*")
      .order("id", { ascending: true });

    if (cartError) {
      console.log(cartError);
      setLoading(false);
      return;
    }

    if (!cartData || cartData.length === 0) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    const ids = cartData.map((item) => item.product_id);

    const { data: productsData, error: productsError } = await supabase
      .from("products")
      .select("*")
      .in("id", ids);

    if (productsError) {
      console.log(productsError);
      setLoading(false);
      return;
    }

    const merged = cartData.map((cartItem) => {
      const product = productsData.find(
        (p) => p.id === cartItem.product_id
      );

      return {
        cartId: cartItem.id,
        quantity: cartItem.quantity,
        ...product,
      };
    });

    setCartItems(merged);
    setLoading(false);
  }

  async function increaseQuantity(item) {
    await supabase
      .from("cart")
      .update({
        quantity: item.quantity + 1,
      })
      .eq("id", item.cartId);

    fetchCart();
  }

  async function decreaseQuantity(item) {
    if (item.quantity <= 1) {
      await removeItem(item.cartId);
      return;
    }

    await supabase
      .from("cart")
      .update({
        quantity: item.quantity - 1,
      })
      .eq("id", item.cartId);

    fetchCart();
  }

  async function removeItem(cartId) {
    await supabase
      .from("cart")
      .delete()
      .eq("id", cartId);

    fetchCart();
  }

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity;
  }, 0);

  const shipping = cartItems.length > 0 ? 0 : 0;
  const tax = Math.round(subtotal * 0.025);
  const total = subtotal + shipping + tax;

  return (
    <div className="cartPage">
      <div className="cartHeader">
        <h1>Your Cart</h1>

        <p>
          Review your selected products before checkout.
        </p>
      </div>

      <div className="cartContainer">
        <div className="cartItems">
          {loading && <h2>Loading...</h2>}

          {!loading && cartItems.length === 0 && (
            <h2>Your cart is empty.</h2>
          )}

          {!loading &&
            cartItems.map((item) => (
              <div
                className="cartItem"
                key={item.cartId}
              >
                <div className="cartImage">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="cartInfo">
                  <h2>{item.name}</h2>

                  <p>{item.badge}</p>

                  <h3>
                    ₹
                    {Number(item.price).toLocaleString(
                      "en-IN"
                    )}
                  </h3>

                  <button
                    onClick={() =>
                      removeItem(item.cartId)
                    }
                    style={{
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>

                <div className="quantityBox">
                  <button
                    onClick={() =>
                      decreaseQuantity(item)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="summaryCard">
          <h2>Order Summary</h2>

          <div className="summaryRow">
            <span>Subtotal</span>

            <span>
              ₹
              {subtotal.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="summaryRow">
            <span>Shipping</span>

            <span>
              {shipping === 0
                ? "Free"
                : `₹${shipping}`}
            </span>
          </div>

          <div className="summaryRow">
            <span>Tax</span>

            <span>
              ₹
              {tax.toLocaleString("en-IN")}
            </span>
          </div>

          <hr />

          <div className="summaryTotal">
            <span>Total</span>

            <span>
              ₹
              {total.toLocaleString("en-IN")}
            </span>
          </div>

          <Link to="/checkout">
  <button className="checkoutBtn">
    Checkout
  </button>
</Link>

          <Link to="/products">
            <button className="continueBtn">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
