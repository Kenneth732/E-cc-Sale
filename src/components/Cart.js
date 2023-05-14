import React from "react";
import "./Cart.css"; // Import the stylesheet

function Cart({ cart, removeFromCart, cartTotal }) {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt="" className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">Total: {cartTotal}</p>
    </div>
  );
}

export default Cart;
