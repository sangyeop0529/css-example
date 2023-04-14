import React, { useState } from "react";

export default function Counter({ total, totalClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">
        {count} <span className="total">/{total}</span>
      </span>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          totalClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
