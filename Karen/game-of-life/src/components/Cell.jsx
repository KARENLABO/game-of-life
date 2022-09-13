import React, { useCallback, useState } from 'react';

const Cell = ({  x, y, isClickable }) => {
  const [isAlive, setAlive] = useState(false);

  const onClickCell = useCallback(() => {
      isClickable && setAlive(!isAlive)
  }, [isAlive, isClickable]);

    return(
        <td 
        id={x+y}
        style={{
          backgroundColor: isAlive ? '#6420ff' : 'white'
        }}
        onClick={onClickCell}></td>
    )
}

export default Cell;
