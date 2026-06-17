import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setOrders(data);
    }
  };

  return (
    <div className="orders">
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order) => (
        <div key={order.id} className="orderCard">
          <h3>Order #{order.id}</h3>
          <p>Name: {order.user_name}</p>
          <p>Phone: {order.phone}</p>
          <p>Address: {order.address}</p>
          <p>Total: ₹{order.total_price}</p>
          <p>Date: {new Date(order.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;