import React from "react";

function CartItem({ item, increment, decrement, reset }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "250px",
        borderRadius: "10px",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Item Details</h3>

      <p><strong>Product:</strong> {item.name}</p>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p>
        <strong>Quantity:</strong> {item.quantity}
      </p>

      <div style={{ marginTop: "15px"}}>
        <button onClick={() => increment(item.id)}>+</button>

        <button
          onClick={() => decrement(item.id)}
          style={{ margin: "0 10px" }}
        >
          -
        </button>

        <button onClick={() => reset(item.id)}>Reset</button>
      </div>
    </div>
  );
}

export default CartItem;
