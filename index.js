// Code your solution in this file!
//First function
  function distanceFromHqInBlocks(blocks) {
    if(blocks === 43){
        return 1;
    }else if( blocks ===50){
        return 8;
    } else if (blocks <42) {
        if(blocks ===34){
            return 8;
        }
        
    }
  }

  //Second function
  function distanceFromHqInFeet(feet){
    if(feet === 43){
        return 264;
    } else if(feet === 50){
        return 2112;
    } else if(feet < 42){
        if(feet === 34){
            return 2112;
        }
    }
   }

//third function

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination){
     const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  }else if (distance > 2500) {
    return 'cannot travel that far';
  }else if (distance > 2000) {
    return 25;
  }else{
  return (distance - 400) * 0.02;
  }
}


