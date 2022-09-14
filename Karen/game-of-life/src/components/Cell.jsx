import React from 'react';

const Cell = ({  x, y, isActive, onClickCell }) => {

    return(
        <td 
          id={x+y}
          style={{
            backgroundColor: isActive  ? '#6420ff' : 'white'
          }}
          onClick={()=> onClickCell(x,y)}
          >
        </td>
    )
}

export default Cell;