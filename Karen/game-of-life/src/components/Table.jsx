import React, { useState } from 'react';
import Cell from './Cell';
import './Table.css';
import {nextState, copy} from './helperFunctions'


function Table() {
  const spaces = 50;
  const [cells, setCells] = useState(new Array(spaces).fill('').map(() => new Array(spaces).fill(false)));
  const [runProgram, setRunProgram] = useState(false);

    const onClickStart = () => {
      setRunProgram(true);
    };

    const onClickCustom = () => {
      setCells(new Array(spaces).fill('').map(() => new Array(spaces).fill(Math.random()<.1)));
    };

    const onClickClear = () => {
      if(!runProgram){
        setCells(new Array(spaces).fill('').map(() => new Array(spaces).fill(false)));
      }
      
    };

    const onClickPause = () => {
      setRunProgram(false);
    };

    const onClickCell = (x,y ) => {
      if(!runProgram){
        const tempArray = copy(cells);
        tempArray[x][y] = !tempArray[x][y];
        setCells(tempArray);
      }
    };

    setTimeout(() => {
      if(runProgram){
        nextState(cells, setCells);
      }
    }, 300);

    return(
      <div className='game-container'>
        <h1>THE GAME OF LIFE</h1>
        <div className='header'>
          <div className='rules'>
            <h4> Rules:</h4>
            <li> If the cell is alive, it will stay alive if it has 2 or 3 neighbors alive.</li>
            <li> If the cell is dead, then it comes to life only in case it has 3 neighbors alive.</li>
          </div>

          <div className='menus-buttons'>
            <button onClick={onClickStart} disabled={runProgram}>
              Start</button>
            <button onClick={onClickPause} disabled={!runProgram}>Pause</button>
            <button onClick={onClickCustom}>Random Values</button>
            <button onClick={onClickClear}>Clear Matrix</button>
          </div>
        </div>
      

        <div>
          <table className='table-container' cellPadding={0} cellSpacing={0}> 
            <tbody>
            {
              cells.map((row, x) => {
                return (
                  <tr key={x}>
                    {row.map((column, y) => {
                    return <Cell key={y} onClickCell={onClickCell} isActive={column} x={x} y={y}/>
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