import React, { useCallback, useState } from 'react';

const Cell = ({  x, y, isActive }) => {


    return(
        <td 
        id={x+y}
        style={{
          backgroundColor: isActive ? '#6420ff' : 'white'
        }}
        >
        </td>
    )
}

export default Cell;
