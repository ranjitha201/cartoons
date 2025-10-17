import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart ({cart.length} items)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              style={{ width: "120px", height: "120px", objectFit: "contain" }}
            />
            <h3>{item.title}</h3>
            <p>
              <b>${item.price}</b>
            </p>
            <button
              onClick={() => removeFromCart(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
