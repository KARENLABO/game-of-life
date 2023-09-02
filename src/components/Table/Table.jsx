import React, { useState } from "react";
import Cell from "./Components/Cell/Cell";
import "./Table.scss";
import Header from "../Header";
import { nextState, copy } from "../helperFunctions";

function Table() {
  const spaces = 20;
  const [cells, setCells] = useState(
    new Array(spaces).fill("").map(() => new Array(spaces).fill(false))
  );
  const [runProgram, setRunProgram] = useState(false);

  const onClickStart = () => {
    setRunProgram(true);
  };

  const onClickCustom = () => {
    if (!runProgram) {
      setCells(
        new Array(spaces)
          .fill("")
          .map(() => new Array(spaces).fill(Math.random() < 0.1))
      );
    }
  };

  const onClickClear = () => {
    if (!runProgram) {
      setCells(
        new Array(spaces).fill("").map(() => new Array(spaces).fill(false))
      );
    }
  };

  const onClickPause = () => {
    setRunProgram(false);
  };

  const onClickCell = (x, y) => {
    if (!runProgram) {
      const tempArray = copy(cells);
      tempArray[x][y] = !tempArray[x][y];
      setCells(tempArray);
    }
  };

  setTimeout(() => {
    if (runProgram) {
      nextState(cells, setCells);
    }
  }, 300);

  return (
    <div className="game-container">
      <Header
        onClickPause={onClickPause}
        onClickStart={onClickStart}
        onClickClear={onClickClear}
        onClickCustom={onClickCustom}
        runProgram={runProgram}
      />

      <div className="table-container">
        <table className="table" cellPadding={0} cellSpacing={0}>
          <tbody className="table-body">
            {cells.map((row, x) => {
              return (
                <tr className="table-body" key={x}>
                  {row.map((column, y) => {
                    return (
                      <Cell
                        key={y}
                        onClickCell={onClickCell}
                        isActive={column}
                        x={x}
                        y={y}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
