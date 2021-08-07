import React from "react";
import "./StatCard.css";

const StatCard = ({pts,ast,reb,stl,blk,fg_pct}) => {
  return(
    <div className = "statscontainer">
      <div className = "PointsCol">
          <h1 className = "StatTitle"> Points </h1>
          <p className = "StatAverage"> {pts}</p>
      </div>
      <div className = "AssistsCol">
            <h1 className = "StatTitle"> Assists </h1>
            <p className = "StatAverage">{ast}</p>
      </div>
      
      <div className = "ReboundsCol">
            <h1 className = "StatTitle"> Rebounds </h1>
           <p className = "StatAverage">{reb} </p>
      </div>
    
      <div className = "StealsCol">
            <h1 className = "StatTitle"> Steals </h1>
            <p className = "StatAverage">{stl} </p>
      </div>
      <div className = "BlocksCol">
            <h1 className = "StatTitle"> Blocks </h1>
            <p className = "StatAverage">{blk} </p>
      </div>
      
      <div className = "FieldGoalCol">
            <h1 className = "StatTitle"> Field Goal </h1>
            <p className = "StatAverage">{(fg_pct * 100) + "%"} </p>
      </div>
    
    
    
    
    
   
    </div>   
    
  );
}

export default StatCard;