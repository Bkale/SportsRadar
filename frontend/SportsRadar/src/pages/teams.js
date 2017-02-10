import React, { Component } from 'react'
import Header from '../components/header'
import '../style/teams.css'

class teams extends Component{
  constructor(){
    super()
    this.state = {
      currentTeam: 'Hawks'
    }
  }

  selectTeam(team){
    this.setState({currentTeam:team})
  }

  render(){
    return(
      <div className="teamsContainer">
        <Header />
        <div className="teams-body">
          <div className="teams-list">
            <div onClick={this.selectTeam.bind(this,"Hawks")} className="teamListItem">
              <img src={'./assets/TeamLogos/hawks.png'} alt="" className="teamListLogo"></img>
                Atlanta Hawks
            </div>
            <div onClick={this.selectTeam.bind(this,"Celtics")} className="teamListItem">
              <img src={'./assets/TeamLogos/celtics.png'} alt="" className="teamListLogo" ></img>
                Boston Celtics
            </div>
            <div onClick={this.selectTeam.bind(this,"Nets")} className="teamListItem">
              <img src={'./assets/TeamLogos/nets.png'} alt="" className="teamListLogo" ></img>
                Brooklyn Nets
            </div>
            <div onClick={this.selectTeam.bind(this,"Hornets")} className="teamListItem">
              <img src={'./assets/TeamLogos/hornets.png'} alt="" className="teamListLogo" ></img>
                Charlotte Hornets
            </div>
            <div onClick={this.selectTeam.bind(this,"Bulls")} className="teamListItem">
              <img src={'./assets/TeamLogos/bulls.png'} alt="" className="teamListLogo" ></img>
                Chicaga Bulls
            </div>
            <div onClick={this.selectTeam.bind(this,"Cavaliers")} className="teamListItem">
              <img src={'./assets/TeamLogos/cavaliers.png'} alt="" className="teamListLogo" ></img>
                Cleveland Cavaliers
            </div>
            <div onClick={this.selectTeam.bind(this,"Mavericks")} className="teamListItem">
              <img src={'./assets/TeamLogos/mavericks.png'} alt="" className="teamListLogo" ></img>
                Dallas Mavericks
            </div>
            <div onClick={this.selectTeam.bind(this,"Nuggets")} className="teamListItem">
              <img src={'./assets/TeamLogos/nuggets.png'} alt="" className="teamListLogo" ></img>
                Denver Nuggets
            </div>
            <div onClick={this.selectTeam.bind(this,"Pistons")} className="teamListItem">
              <img src={'./assets/TeamLogos/pistons.png'} alt="" className="teamListLogo" ></img>
                Detriot Pistons
            </div>
            <div onClick={this.selectTeam.bind(this,"Warriors")} className="teamListItem">
              <img src={'./assets/TeamLogos/warriors.png'} alt="" className="teamListLogo" ></img>
                Golden State Warriors
            </div>
            <div onClick={this.selectTeam.bind(this,"Rockets")} className="teamListItem">
              <img src={'./assets/TeamLogos/rockets.png'} alt="" className="teamListLogo" ></img>
                Houston Rockets
            </div>
            <div onClick={this.selectTeam.bind(this,"Pacers")} className="teamListItem">
              <img src={'./assets/TeamLogos/pacers.png'} alt="" className="teamListLogo" ></img>
                Indiana Pacers
            </div>
            <div onClick={this.selectTeam.bind(this,"Clippers")} className="teamListItem">
              <img src={'./assets/TeamLogos/clippers.png'} alt="" className="teamListLogo" ></img>
                Los Angeles Clippers
            </div>
            <div onClick={this.selectTeam.bind(this,"Lakers")} className="teamListItem">
              <img src={'./assets/TeamLogos/lakers.png'} alt="" className="teamListLogo" ></img>
                Los Angeles Lakers
            </div>
            <div onClick={this.selectTeam.bind(this,"Grizzlies")} className="teamListItem">
              <img src={'./assets/TeamLogos/grizzlies.png'} alt="" className="teamListLogo" ></img>
                Memphis Grizzlies
            </div>
            <div onClick={this.selectTeam.bind(this,"Heat")} className="teamListItem">
              <img src={'./assets/TeamLogos/heat.png'} alt="" className="teamListLogo" ></img>
                Miami Heat
            </div>
            <div onClick={this.selectTeam.bind(this,"Bucks")} className="teamListItem">
              <img src={'./assets/TeamLogos/bucks.png'} alt="" className="teamListLogo" ></img>
                Millwaki Bucks
            </div>
            <div onClick={this.selectTeam.bind(this,"Pelicans")} className="teamListItem">
              <img src={'./assets/TeamLogos/pelicans.png'} alt="" className="teamListLogo" ></img>
                New Orleans Pelicans
            </div>
            <div onClick={this.selectTeam.bind(this,"Knicks")} className="teamListItem">
              <img src={'./assets/TeamLogos/Knicks.png'} alt="" className="teamListLogo" ></img>
                New York Knicks
            </div>
            <div onClick={this.selectTeam.bind(this,"Thunder")} className="teamListItem">
              <img src={'./assets/TeamLogos/thunder.png'} alt="" className="teamListLogo" ></img>
                Oklahoma City Thunder
            </div>
            <div onClick={this.selectTeam.bind(this,"Magic")} className="teamListItem">
              <img src={'./assets/TeamLogos/magic.png'} alt="" className="teamListLogo" ></img>
                Orlando Magic
            </div>
            <div onClick={this.selectTeam.bind(this,"Sixers")} className="teamListItem">
              <img src={'./assets/TeamLogos/sixers.png'} alt="" className="teamListLogo" ></img>
                Philadelphis 76ers
            </div>
            <div onClick={this.selectTeam.bind(this,"Suns")} className="teamListItem">
              <img src={'./assets/TeamLogos/suns.png'} alt="" className="teamListLogo" ></img>
                Phoenix Suns
            </div>
            <div onClick={this.selectTeam.bind(this,"Trailblazers")} className="teamListItem">
              <img src={'./assets/TeamLogos/trailblazers.png'} alt="" className="teamListLogo" ></img>
                Portland Trailblazers
            </div>
            <div onClick={this.selectTeam.bind(this,"Kings")} className="teamListItem">
              <img src={'./assets/TeamLogos/kings.png'} alt="" className="teamListLogo" ></img>
                Sacramento Kings
            </div>
            <div onClick={this.selectTeam.bind(this,"Spurs")} className="teamListItem">
              <img src={'./assets/TeamLogos/spurs.png'} alt="" className="teamListLogo" ></img>
                San Antonio Spurs
            </div>
            <div onClick={this.selectTeam.bind(this,"Raptors")} className="teamListItem">
              <img src={'./assets/TeamLogos/raptors.png'} alt="" className="teamListLogo" ></img>
                Toronto Raptors
            </div>
            <div onClick={this.selectTeam.bind(this,"Jazz")} className="teamListItem">
              <img src={'./assets/TeamLogos/jazz.png'} alt="" className="teamListLogo" ></img>
                Utah Jazz
            </div>
            <div onClick={this.selectTeam.bind(this,"Wizards")} className="teamListItem">
              <img src={'./assets/TeamLogos/wizards.png'} alt="" className="teamListLogo" ></img>
                Washington Wizards
            </div>
          </div>
          <div className="teams-content">
            <div className="team-jumbotron">
              <div className={this.state.currentTeam}></div>
            </div>
            <div className="playersContainer">
              Players Section
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default teams
