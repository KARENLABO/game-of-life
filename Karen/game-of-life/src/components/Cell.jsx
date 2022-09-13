import React, { useCallback, useState } from 'react';

const Cell = ({  x, y, isClickable }) => {
    const [isAlive, setAlive] = useState(false);

    const onClickCell = useCallback(() => {
        isClickable && setAlive(!isAlive)
    }, [isAlive, isClickable]);

    return(
        <td 
        style={{
          backgroundColor: isAlive ? 'green' : 'white'
        }}
        onClick={onClickCell}></td>
    )
}

export default Cell;
