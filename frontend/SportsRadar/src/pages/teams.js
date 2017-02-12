import React, { Component } from 'react'
import Header from '../components/header'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import Players from '../components/players.js'
import { bindActionCreators } from 'redux'
import '../style/teams.css'

class teams extends Component{
  constructor(){
    super()
    this.state = {
      currentTeam: 'Hawks',
      logo: './assets/TeamLogos/hawks.png',
      teamName: 'Atlanta Hawks',
      teamColor: '#E03A3E'
    }
  }

  selectTeam(team,logo,name,color){
    this.setState({
      currentTeam:team,
      logo:logo,
      teamName:name,
      teamColor:color
    })
  }
  renderContent(team,stats){
    console.log(team);
    console.log(stats);
    return(
      <div className="teams-content">
        <div className="team-jumbotron">
          <div className={this.state.currentTeam}>
            <div className="horizontal">
              <img src={this.state.logo} alt="" className="jumbotronLogo"></img>
              <h1>{this.state.teamName}</h1>
            </div>
          </div>
        </div>
        <Players staff={team} logo={this.state.logo} color={this.state.teamColor}/>
      </div>
    )
  }

  render(){
    const teamProfile = this.props.teamProfile;
    const standings = this.props.standings;
    return(
      <div className="teamsContainer">
        <Header />
        <div className="teams-body">
          <div className="teams-list">
            <div onClick={this.selectTeam.bind(this,"Hawks",'./assets/TeamLogos/hawks.png','Atlanta Hawks','#E03A3E')} className="teamListItem">
              <img src={'./assets/TeamLogos/hawks.png'} alt="" className="teamListLogo"></img>
                Atlanta Hawks
            </div>
            <div onClick={this.selectTeam.bind(this,"Celtics",'./assets/TeamLogos/celtics.png','Boston Celtics', "#008348")} className="teamListItem">
              <img src={'./assets/TeamLogos/celtics.png'} alt="" className="teamListLogo" ></img>
                Boston Celtics
            </div>
            <div onClick={this.selectTeam.bind(this,"Nets",'./assets/TeamLogos/nets.png', 'Brooklyn Nets', "#191919")} className="teamListItem">
              <img src={'./assets/TeamLogos/nets.png'} alt="" className="teamListLogo" ></img>
                Brooklyn Nets
            </div>
            <div onClick={this.selectTeam.bind(this,"Hornets","./assets/TeamLogos/hornets.png","Charlotte Hornets", "#008CA8")} className="teamListItem">
              <img src={'./assets/TeamLogos/hornets.png'} alt="" className="teamListLogo" ></img>
                Charlotte Hornets
            </div>
            <div onClick={this.selectTeam.bind(this,"Bulls",'./assets/TeamLogos/bulls.png',"Chicago Bulls", "#CE1141")} className="teamListItem">
              <img src={'./assets/TeamLogos/bulls.png'} alt="" className="teamListLogo" ></img>
                Chicago Bulls
            </div>
            <div onClick={this.selectTeam.bind(this,"Cavaliers",'./assets/TeamLogos/cavaliers.png', "Cleveland Cavaliers", "#860038")} className="teamListItem">
              <img src={'./assets/TeamLogos/cavaliers.png'} alt="" className="teamListLogo" ></img>
                Cleveland Cavaliers
            </div>
            <div onClick={this.selectTeam.bind(this,"Mavericks",'./assets/TeamLogos/mavericks.png', "Dallas Mavericks", "#007DC5")} className="teamListItem">
              <img src={'./assets/TeamLogos/mavericks.png'} alt="" className="teamListLogo" ></img>
                Dallas Mavericks
            </div>
            <div onClick={this.selectTeam.bind(this,"Nuggets",'./assets/TeamLogos/nuggets.png', "Denver Nuggets", "#4FA8FF")} className="teamListItem">
              <img src={'./assets/TeamLogos/nuggets.png'} alt="" className="teamListLogo" ></img>
                Denver Nuggets
            </div>
            <div onClick={this.selectTeam.bind(this,"Pistons",'./assets/TeamLogos/pistons.png', "Detriot Pistons", "#006BB6")} className="teamListItem">
              <img src={'./assets/TeamLogos/pistons.png'} alt="" className="teamListLogo" ></img>
                Detriot Pistons
            </div>
            <div onClick={this.selectTeam.bind(this,"Warriors",'./assets/TeamLogos/warriors.png', "Golden State Warriors", "#006BB6")} className="teamListItem">
              <img src={'./assets/TeamLogos/warriors.png'} alt="" className="teamListLogo" ></img>
                Golden State Warriors
            </div>
            <div onClick={this.selectTeam.bind(this,"Rockets",'./assets/TeamLogos/rockets.png', "Houston Rockets", "#CE1141")} className="teamListItem">
              <img src={'./assets/TeamLogos/rockets.png'} alt="" className="teamListLogo" ></img>
                Houston Rockets
            </div>
            <div onClick={this.selectTeam.bind(this,"Pacers",'./assets/TeamLogos/pacers.png', "Indiana Pacers", "#FFC633")} className="teamListItem">
              <img src={'./assets/TeamLogos/pacers.png'} alt="" className="teamListLogo" ></img>
                Indiana Pacers
            </div>
            <div onClick={this.selectTeam.bind(this,"Clippers",'./assets/TeamLogos/clippers.png', "Los Angeles Clippers", "#ED174C")} className="teamListItem">
              <img src={'./assets/TeamLogos/clippers.png'} alt="" className="teamListLogo" ></img>
                Los Angeles Clippers
            </div>
            <div onClick={this.selectTeam.bind(this,"Lakers",'./assets/TeamLogos/lakers.png', "Los Angeles Lakers", "#552582")} className="teamListItem">
              <img src={'./assets/TeamLogos/lakers.png'} alt="" className="teamListLogo" ></img>
                Los Angeles Lakers
            </div>
            <div onClick={this.selectTeam.bind(this,"Grizzlies",'./assets/TeamLogos/grizzlies.png',"Memphis Grizzlies", "#23375B")} className="teamListItem">
              <img src={'./assets/TeamLogos/grizzlies.png'} alt="" className="teamListLogo" ></img>
                Memphis Grizzlies
            </div>
            <div onClick={this.selectTeam.bind(this,"Heat",'./assets/TeamLogos/heat.png', "Miami Heat", "#98002E")} className="teamListItem">
              <img src={'./assets/TeamLogos/heat.png'} alt="" className="teamListLogo" ></img>
                Miami Heat
            </div>
            <div onClick={this.selectTeam.bind(this,"Bucks",'./assets/TeamLogos/bucks.png', "Millwaki Bucks", "#00471B")} className="teamListItem">
              <img src={'./assets/TeamLogos/bucks.png'} alt="" className="teamListLogo" ></img>
                Millwaki Bucks
            </div>
            <div onClick={this.selectTeam.bind(this,"Timberwolves",'./assets/TeamLogos/timberwolves.png', "Mininsota Timberwolves", "#005083")} className="teamListItem">
              <img src={'./assets/TeamLogos/timberwolves.png'} alt="" className="teamListLogo" ></img>
                Mininsota Timberwolves
            </div>
            <div onClick={this.selectTeam.bind(this,"Pelicans",'./assets/TeamLogos/pelicans.png', "New Orleans Pelicans", "#002B5C")} className="teamListItem">
              <img src={'./assets/TeamLogos/pelicans.png'} alt="" className="teamListLogo" ></img>
                New Orleans Pelicans
            </div>
            <div onClick={this.selectTeam.bind(this,"Knicks",'./assets/TeamLogos/Knicks.png', "New York Knicks", "#006BB6")} className="teamListItem">
              <img src={'./assets/TeamLogos/Knicks.png'} alt="" className="teamListLogo" ></img>
                New York Knicks
            </div>
            <div onClick={this.selectTeam.bind(this,"Thunder",'./assets/TeamLogos/thunder.png', "Oklahoma City Thunder", "#007DC3")} className="teamListItem">
              <img src={'./assets/TeamLogos/thunder.png'} alt="" className="teamListLogo" ></img>
                Oklahoma City Thunder
            </div>
            <div onClick={this.selectTeam.bind(this,"Magic",'./assets/TeamLogos/magic.png', "Orlando Magic", "#007DC5")} className="teamListItem">
              <img src={'./assets/TeamLogos/magic.png'} alt="" className="teamListLogo" ></img>
                Orlando Magic
            </div>
            <div onClick={this.selectTeam.bind(this,"Sixers",'./assets/TeamLogos/sixers.png', "Philadelphia 76ers", "#ED174C")} className="teamListItem">
              <img src={'./assets/TeamLogos/sixers.png'} alt="" className="teamListLogo" ></img>
                Philadelphis 76ers
            </div>
            <div onClick={this.selectTeam.bind(this,"Suns",'./assets/TeamLogos/suns.png', "Phoenix Suns", "#B6BFBF")} className="teamListItem">
              <img src={'./assets/TeamLogos/suns.png'} alt="" className="teamListLogo" ></img>
                Phoenix Suns
            </div>
            <div onClick={this.selectTeam.bind(this,"Trailblazers",'./assets/TeamLogos/trailblazers.png', "Portland Trailblazers", "#F0163A")} className="teamListItem">
              <img src={'./assets/TeamLogos/trailblazers.png'} alt="" className="teamListLogo" ></img>
                Portland Trailblazers
            </div>
            <div onClick={this.selectTeam.bind(this,"Kings",'./assets/TeamLogos/kings.png', "Sacramento Kings", "#724C9F")} className="teamListItem">
              <img src={'./assets/TeamLogos/kings.png'} alt="" className="teamListLogo" ></img>
                Sacramento Kings
            </div>
            <div onClick={this.selectTeam.bind(this,"Spurs",'./assets/TeamLogos/spurs.png', "San Antonio Spurs", "#B6BFBF")} className="teamListItem">
              <img src={'./assets/TeamLogos/spurs.png'} alt="" className="teamListLogo" ></img>
                San Antonio Spurs
            </div>
            <div onClick={this.selectTeam.bind(this,"Raptors",'./assets/TeamLogos/raptors.png', "Toronto Raptors", "#CE1141")} className="teamListItem">
              <img src={'./assets/TeamLogos/raptors.png'} alt="" className="teamListLogo" ></img>
                Toronto Raptors
            </div>
            <div onClick={this.selectTeam.bind(this,"Jazz",'./assets/TeamLogos/jazz.png', "Utah Jazz", "#002B5C")} className="teamListItem">
              <img src={'./assets/TeamLogos/jazz.png'} alt="" className="teamListLogo" ></img>
                Utah Jazz
            </div>
            <div onClick={this.selectTeam.bind(this,"Wizards",'./assets/TeamLogos/wizards.png', "Washington Wizards", "#002566")} className="teamListItem">
              <img src={'./assets/TeamLogos/wizards.png'} alt="" className="teamListLogo" ></img>
                Washington Wizards
            </div>
          </div>
          {this.renderContent(teamProfile,standings)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(teams);
