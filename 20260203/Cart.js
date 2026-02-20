import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Bingo", price: 20, quantity: 1 },
    { id: 2, name: "Buttermilk", price: 35, quantity: 1 },
    { id: 3, name: "Dairy Milk", price: 50, quantity: 1 },
    { id: 4, name: "Lays", price: 40, quantity: 1 },
    { id: 5, name: "Coke", price: 60, quantity: 1 },
    {id: 6, name: "Pepsi", price: 50, quantity: 1},
    {id: 7, name: "Sprite", price: 45, quantity: 1},
  ]);

  const incrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const resetQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: 1 } : item
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Shopping Cart</h1>

      {/* FLEX CONTAINER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          backgroundColor: "#f0edbf",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increment={incrementQuantity}
            decrement={decrementQuantity}
            reset={resetQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;