import React, { useState, useEffect } from "react";
import bubbleSort from "../algorithms/bubbleSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArr = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 100) + 10
    );
    setArray(newArr);
  };

  const handleBubbleSort = () => {
    setIsSorting(true);
    const sortedArray = bubbleSort([...array]);
    setTimeout(() => {
      setArray(sortedArray);
      setIsSorting(false);
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "300px",
          marginBottom: "2rem",
        }}
      >
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "turquoise",
              height: `${value * 3}px`,
              width: "10px",
              margin: "0 2px",
            }}
            title={value}
          />
        ))}
      </div>
      <button onClick={resetArray} disabled={isSorting} style={{ marginRight: 10 }}>
        Generate New Array
      </button>
      <button onClick={handleBubbleSort} disabled={isSorting}>
        Bubble Sort
      </button>
    </div>
  );
};

export default SortingVisualizer;
