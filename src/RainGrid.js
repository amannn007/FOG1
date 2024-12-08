import React, { useEffect, useState } from "react";
import "./RainGrid.css";

const RainGrid = ({ rows = 15, columns = 20 }) => {
  const [grid, setGrid] = useState([]);
  const [drops, setDrops] = useState([]);

  // Initialize the grid
  useEffect(() => {
    const newGrid = Array(rows)
      .fill(0)
      .map(() => Array(columns).fill(0));
    setGrid(newGrid);

    // Randomly initialize drops
    const initialDrops = Array(columns)
      .fill(0)
      .map(() => ({
        row: Math.floor(Math.random() * rows),
        col: Math.floor(Math.random() * columns),
        color: getRandomColor(),
      }));
    setDrops(initialDrops);
  }, [rows, columns]);

  // Move drops downward dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setDrops((prevDrops) =>
        prevDrops.map((drop) => ({
          row: (drop.row + 1) % rows,
          col: drop.col,
          color: drop.color,
        }))
      );
    }, 200);

    return () => clearInterval(interval);
  }, [rows]);

  const getRandomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((_, colIndex) => {
            const drop = drops.find(
              (d) => d.row === rowIndex && d.col === colIndex
            );
            return (
              <div
                key={colIndex}
                className="cell"
                style={{
                  backgroundColor: drop ? drop.color : "white",
                  transition: "background-color 0.2s",
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RainGrid;
