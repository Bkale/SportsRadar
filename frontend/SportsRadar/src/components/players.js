import React, { Component } from 'react'
import '../style/players.css'
class players extends Component{

  renderPlayers(player,i){
    // const baseUrl = "https://nba-players.herokuapp.com/players/" + player.last_name
    const baseUrl = "https://nba-players.herokuapp.com/players/" + player.last_name + "/" + player.first_name
    const primaryColor = this.props.primaryColor
    const secondaryColor = this.props.secondaryColor
    return(
      <div key={i} className="imageContainer">
        <span>{player.jersey_number}</span>
        <div style={{backgroundColor:primaryColor,border:"3px solid " + secondaryColor,backgroundImage:"url("+baseUrl+")"}} className="image"></div>
        <h3>{player.full_name}</h3>
        <p>{player.primary_position}</p>
        <p><b>{player.weight}</b>lb | <b>{player.height}</b>cm</p>
        <img src={this.props.logo} alt="" className="imageLogo"/>
      </div>
    )
  }
  render(){
    const players = this.props.staff.currentTeam.players
    return(
      <div className="playersContainer">
        {players ? players.map((player,i) => this.renderPlayers(player, i)) : ""}
      </div>
    )
  }
}

export default players
