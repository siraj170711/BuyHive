import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="card mb-3 p-3">
            <div className="row align-items-center">

              {/* IMAGE */}
              <div className="col-md-3">
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{ height: "100px", objectFit: "cover" }}
                />
              </div>

              {/* DETAILS */}
              <div className="col-md-5">
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
              </div>

              {/* QUANTITY CONTROLS */}
              <div className="col-md-4 d-flex align-items-center">
                <button
                  className="btn btn-dark me-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  className="btn btn-dark ms-2"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
