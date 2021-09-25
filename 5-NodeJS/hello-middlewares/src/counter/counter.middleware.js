const counter = (req, _res, next) => {
  /**  FORMA DE LOS 90 CON LOS IFS */  
  // if(req.midCounter !== undefined){
  //     // le sumo uno
  //     req.midCounter +=1;
  // }else{
  //     req.midCounter = 1;
  // }
  /**  FORMA DE LOS 2000 CON LOS TERNARIOS */  
  //req.midCounter = req.midCounter !== undefined ? req.midCounter + 1 : 1;
  /**  FORMA DE LOS 2019 MOLONES (Nullish coalescing operator (??)) */  
  req.midCounter =  (req.midCounter ?? 0) + 1;
  next();
};

export default counter;
