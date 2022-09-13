
import React, { useState } from 'react';
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
    const rows = generateNewArray(numRows);
    const columns = generateNewArray(numCols);

    return(
        <table className='table-container' cellPadding={0} cellSpacing={0}> 
          <tbody>
          {
            rows.map((row, x) => {
              return (
                <tr key={x}>
                  {
                    columns.map((column, y) => {
                      return(
                        <td 
                        style={{
                          background:{background}
                        }} 
                        onClick={() =>changeState(x,y)} id={x+"-"+y} key={y}></td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
          </tbody>
        </table>
    );
}

export default Table;
