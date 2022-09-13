import React, { useState } from 'react';
import Cell from './Cell';
import './Table.css';


const numRows = 10;
const numCols = 10;

const generateNewArray = (value) => {
  const array = [];
  for (let i = 0; i < value; i++) {
    array.push("");
  }
  return array
}



function Table() {
  const [isClickable, setClickable] = useState(true);

    const rows = generateNewArray(numRows);
    const columns = generateNewArray(numCols);

    const onClickStart = () => {
      setClickable(!isClickable);
    }
    
    return(
      <div>
        <div>
          <button onClick={onClickStart}>{isClickable ? 'Start' : 'Stop'}</button>
        </div>
        <div>
          <table className='table-container' cellPadding={0} cellSpacing={0}> 
            <tbody>
            {
              rows.map((row, x) => {
                return (
                  <tr key={x}>
                    {
                      columns.map((column, y) => {
                        return(
                          <Cell x={x} y={y} isClickable={isClickable}/>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Table;