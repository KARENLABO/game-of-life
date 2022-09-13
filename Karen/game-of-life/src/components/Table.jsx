import React, { useState } from 'react';
import Cell from './Cell';
import './Table.css';

function Table() {
  const [isClickable, setClickable] = useState(true);
  const cells = new Array(80).fill('').map(() => new Array(80).fill(Math.random()<0.5));;

    const onClickStart = () => {
      setClickable(!isClickable);
      createRandom()
    }

    const createRandom = () =>{
      const matrix = new Array(80).fill('').map(() => new Array(80).fill(Math.random()<0.5));
      cells.push(matrix);
    };    
    
    const onClickClean = () => {
      setClickable(!isClickable);
    }
    
    return(
      <div>
        <div className='butons-menu'>
          <button onClick={onClickStart}>{isClickable ? 'Start' : 'Stop'}</button>
          <button onClick={onClickClean}>Clear Matrix</button>
        </div>
        <div>
          <table className='table-container' cellPadding={0} cellSpacing={0}> 
            <tbody>
            {
              cells.map((row, i) => {
                return (
                  <tr key={i}>
                    {row.map((colum, j) => {
                    return <Cell x={i} y={j}/>
                    })}
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