import React from 'react';
import CardList from './CardList.js';
import SearchBar from './SearchBar.js';
import Card from './Card.js';
import Modal from "./Modal.js";
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    // eslint-disable-next-line
    let playerName = '';
    // eslint-disable-next-line
    let playerAverages;
    // eslint-disable-next-line
    let playerTable;
    // eslint-disable-next-line
    let playerArray = [];
    this.state = {
      searchField:"",
      show: false,
    }
    
  }
  
    showModal = (e,id) => {
      this.playerId= id;
      
      
      let query = "https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=";
      query+= this.playerId;

      fetch(query).then(response => {
          return response.json();
      })
      .then(jsonD => {
          this.playerAverages = jsonD.data[0];

          
      });
      let tableQuery = "https://www.balldontlie.io/api/v1/stats?seasons[]=2018&seasons[]=2019&player_ids[]=";
      tableQuery+= this.playerId;
      fetch (tableQuery).then(response => {
        return response.json();
      })
      .then(jsonD => {
        this.playerTable = jsonD.data;
 
        this.setState({show: true});
      });
      
    };
    
    closeModal = e => {
      this.setState({show: false});
    };

  onSearchChange = (event) => {
    //disable refresh when enter is pressed
    if (event.key === 'Enter' || event.target.tagName === 'BUTTON') {
      event.preventDefault();
      let textValue = document.getElementById("searchBox").value;
      var query = "https://www.balldontlie.io/api/v1/players?search=";
      query+=textValue;
      var imageQuery = "https://nba-players.herokuapp.com/players/";

      //fetch the data from searchBox using nba api
      fetch(query).then(response => {
        return response.json();
      })
      .then(jsonD => {



        this.playerArray = jsonD.data.map(player => {

          return <Card 
          name = {player.first_name + " " + player.last_name} 
          id = {player.id}
          team = {player.team.full_name} 
          position = {player.position} 
          height = {player.height_feet + " ' " + player.height_inches}  
          weight = {player.weight_pounds} 
          imageLink = {imageQuery + player.last_name + '/' + player.first_name}
          showModal = {this.showModal} 
          /> 

        })
        this.setState({searchField: textValue}); 
      });
    }
 }

  
  
  
  
  render () {
    return (
      <div>
          <div className = "forms" >
            <SearchBar searchChange = {this.onSearchChange}/>
          </div>
          <CardList playerArray = {this.playerArray}/>
          <Modal show ={this.state.show} playerId ={this.playerId} closeModal = {this.closeModal} playerAverages = {this.playerAverages} playerTable = {this.playerTable}>
            <CardList playerArray = {this.playerArray}/>
          </Modal>
      
      </div>
    );
  }
}

export default App;



