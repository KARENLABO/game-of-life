import React, { useState } from 'react';
import Cell from './Cell';
import './Table.css';


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
      setCells(new Array(spaces).fill('').map(() => new Array(spaces).fill(false)));
    };

    const onClickPause = () => {
      setRunProgram(false);
    };

    const onClickCell = (x,y ) => {
      if(!runProgram){
        const tempArray = copy();
        tempArray[x][y] = !tempArray[x][y];
        setCells(tempArray);
      }
    };

    setTimeout(() => {
      if(runProgram){
        nextState()
      }
    }, 300);

    const evaluateAlive = (x,y) => {
      let alive = 0;
      for(let i= -1; i<=1; i++){
        for(let j = -1; j<=1; j++){
          if(i === 0 && j=== 0 ){
            continue
          }
          try{
            if(cells[x+i][y+j]){
              alive++
            }
          }catch (e){}
          if(alive> 3){
            return alive
          }
        }
      }
      return alive;
    };

    const copy = () => {
      const copyArray = [];
      for(let x = 0; x<cells.length; x++){
        copyArray.push([]);
        for( let y= 0; y<cells.length; y++){
          copyArray[x][y] = cells[x][y];
        }
      }
      return copyArray;
    };

    const nextState = () => {
      const tempArray = copy();
      for(let x = 0; x<cells.length; x++ ){
        for(let y=0; y<cells.length; y++){
          let alive = evaluateAlive(x,y);
          if(tempArray[x][y]){
            if(alive <2 || alive > 3){ // cell has to die
              tempArray[x][y]= false;
            }
          }else{
            if(alive === 3 ){
              tempArray[x][y]= true; // cell has to live
            }
          }
        }
      }
      setCells(tempArray);
    };



    return(
      <div>
        <div className='butons-menu'>
          <button onClick={onClickStart} disabled={runProgram}>
            Start</button>
          <button onClick={onClickPause}disabled={!runProgram}>Pause</button>
          <button onClick={onClickCustom}>Random Values</button>
          <button onClick={onClickClear}>Clear Matrix</button>
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