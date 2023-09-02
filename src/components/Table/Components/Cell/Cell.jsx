import React from "react";

const Cell = ({ x, y, isActive, onClickCell }) => {
  return (
    <td
      className="table-td"
      id={x + y}
      style={{
        backgroundColor: isActive ? "#E420D1" : "black",
      }}
      onClick={() => onClickCell(x, y)}
    ></td>
  );
};

export default Cell;
