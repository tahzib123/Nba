import React from "react";
import "./Modal.css";
import StatCard from "./StatCard.js";
import Table from "./Table.js";

class Modal extends React.Component {

  render() {
    // eslint-disable-next-line
    let cardToRender;
    if(this.props.show === false){
          return null;
     }

    
    this.props.children.props.playerArray.forEach((currentPlayer) =>{
        if(currentPlayer.props.id === this.props.playerId){
            this.cardToRender = currentPlayer;
        }
     });
     if(this.props.playerAverages === undefined){
      return (
       <div className = "modal">
         <p className ="content">{this.cardToRender}</p>
         <p>Data For this Player cannot be found</p>
         <button className = "toggle-button" type='button' onClick = {this.props.closeModal} >Close</button>
       </div>
      );
    }

    let playerData = this.props.playerAverages;
    //eslint-disable-next-line
    let playerGames = this.props.playerTable;

    return (
      <div className = "modal">
        
        <p className ="content">{this.cardToRender}</p>
        <h1 className = "SeasonAvgTitle">Season Averages</h1>
        <StatCard pts = {playerData.pts} ast = {playerData.ast} reb = {playerData.reb} stl = {playerData.stl} blk = {playerData.blk} fg_pct = {playerData.fg_pct} />
        <h1 className = "statcardtitle">Last 25 Games</h1>
        <Table playerGames = {playerGames}/>
        <button className = "toggle-button" type='button' onClick = {this.props.closeModal} >Close</button>
      
      </div>
    );
  }
}



export default Modal;