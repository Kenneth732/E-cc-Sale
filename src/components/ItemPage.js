import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cart from "./Cart";

function ItemPage() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://machinedata.onrender.com/machine")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <NavBar cartCount={cart.length} />
      <div className="content"></div>
      {/* <Cart cart={cart} removeFromCart={removeFromCart} cartTotal={calculateTotal()} /> */}
      <ItemList items={items} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default ItemPage;
