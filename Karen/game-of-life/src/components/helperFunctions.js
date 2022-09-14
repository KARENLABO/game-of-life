export const evaluateAlive = (x,y, cells) => {
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

  export const copy = (cells) => {
    const copyArray = [];
    for(let x = 0; x<cells.length; x++){
      copyArray.push([]);
      for( let y= 0; y<cells.length; y++){
        copyArray[x][y] = cells[x][y];
      }
    }
    return copyArray;
  };

  export const nextState = (cells, setCells) => {
    const tempArray = copy(cells);
    for(let x = 0; x<cells.length; x++ ){
      for(let y=0; y<cells.length; y++){
        let alive = evaluateAlive(x,y, cells);
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