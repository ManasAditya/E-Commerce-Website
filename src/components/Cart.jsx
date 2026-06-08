import { Link } from "react-router-dom";

function Cart() {
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

          <div className="cartItem">

            <div className="cartImage">
              📱
            </div>

            <div className="cartInfo">

              <h2>iPhone 16 Pro</h2>

              <p>Titanium Black • 256GB</p>

              <h3>₹79,999</h3>

            </div>

            <div className="quantityBox">

              <button>-</button>

              <span>1</span>

              <button>+</button>

            </div>

          </div>

        </div>

        <div className="summaryCard">

          <h2>Order Summary</h2>

          <div className="summaryRow">
            <span>Subtotal</span>
            <span>₹79,999</span>
          </div>

          <div className="summaryRow">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summaryRow">
            <span>Tax</span>
            <span>₹1,999</span>
          </div>

          <hr />

          <div className="summaryTotal">
            <span>Total</span>
            <span>₹81,998</span>
          </div>

          <button className="checkoutBtn">
            Checkout
          </button>

          <Link>
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