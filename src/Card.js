import React from 'react';
import './Card.css';


const Card = ({name,id,team, position,height,weight,imageLink, showModal}) => {
  if ( {position} == null || {weight} == null ){
    console.log("Position is null");
    imageLink = 'questionmark.png';
  }

  return(
    <div className = "outerGrid">
      <div className = "div1">
    
         <div className = "div3">          
          <img src = {imageLink}  alt = "Player Profile"/>
         </div>
         <div className = "div4">
           <h1 className = "Name">{name}</h1>
           <p className = "Info">{team}</p>
         </div>
          
     </div>
    


      <div className = "div2">
        <div className = "div5">
           <h3>Height</h3>
           <p className = "height">{height}</p>
    
        </div>
        <div className = "div6">
          <h3>Weight</h3>
          <p className = "weight">{weight} lbs </p>
    
        </div>
        <div className = "div7">
          <h3>Position</h3>
          <p className = "pos">{position}</p>
    
        </div>
        <div className = "div8"> 
          
          <button type='button' onClick = {(e) => { showModal(e, id)}}>View Stats</button>
        </div>
         
      </div>
      

    </div>
  );
}

export default Card;