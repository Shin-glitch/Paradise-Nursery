import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <h2>Your cart is empty.</h2>

        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <h2>Total Plants: {totalItems}</h2>
      <h2>Total Price: ₹{totalPrice}</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <div>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>

            <div>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  )
                }
              >
                -
              </button>

              <span> {item.quantity} </span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
              >
                +
              </button>
            </div>

            <p>
              Subtotal: ₹{item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch(removeItem(item.id))
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>

        <button onClick={() => alert("Coming Soon")}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;