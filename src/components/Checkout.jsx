import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Fetch cart + products (IMPORTANT FIX)
  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    // 1. get cart items
    const { data: cartData, error: cartError } = await supabase
      .from("cart")
      .select("*");

    if (cartError) {
      console.log(cartError);
      return;
    }

    if (!cartData || cartData.length === 0) {
      setCart([]);
      return;
    }

    // 2. get products
    const productIds = cartData.map((item) => item.product_id);

    const { data: productData, error: productError } = await supabase
      .from("products")
      .select("*")
      .in("id", productIds);

    if (productError) {
      console.log(productError);
      return;
    }

    // 3. merge cart + products
    const merged = cartData.map((cartItem) => {
      const product = productData.find(
        (p) => p.id === cartItem.product_id
      );

      return {
        ...cartItem,
        price: product?.price || 0,
        name: product?.name || "Product",
      };
    });

    setCart(merged);
  }

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FIXED TOTAL
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);

  // PLACE ORDER
  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Fill all details");
      return;
    }

    // 1. create order
    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_name: form.name,
          phone: form.phone,
          address: form.address,
          total_price: total,
        },
      ])
      .select();

    if (orderError) {
      console.log(orderError);
      return;
    }

    const orderId = orderData[0].id;

    // 2. insert order items
    const items = cart.map((item) => ({
      order_id: orderId,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(items);

    if (itemsError) {
      console.log(itemsError);
      return;
    }

    // 3. clear cart
    await supabase.from("cart").delete().neq("id", 0);

    alert("Order placed successfully!");
    navigate("/");
  };

  // EMPTY CART UI
  if (cart.length === 0) {
    return (
      <div className="checkout">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;