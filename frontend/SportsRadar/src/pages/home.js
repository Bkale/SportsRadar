import React, { Component } from 'react'
// import { browserHistory } from 'react-router'
import Header from '../components/header'
import '../style/Home.css'

class home extends Component{
  constructor(){
    super()
    this.state = {
      currentimg: '../assets/backgroundGifs/bulls.gif'
    }
  }
  componentDidMount(){
    this.iterate()
  }
  iterate(){
    const images = [
      '../assets/backgroundGifs/bulls.gif',
      '../assets/backgroundGifs/cavaliers.gif',
      '../assets/backgroundGifs/celtics.gif',
      '../assets/backgroundGifs/heat.gif',
      '../assets/backgroundGifs/lakers.gif',
      '../assets/backgroundGifs/pelicans.gif',
      '../assets/backgroundGifs/spurs.gif',
      '../assets/backgroundGifs/thunder.gif',
      '../assets/backgroundGifs/warriors.gif'
      ]
    let count = 1
    setInterval(() => {
      this.setState({currentimg: images[count]})
      count === images.length - 1 ? count = 0 : count += 1;
    },2700)
  }

  render(){
    return(
      <div className="homeContainer">
        <div className="jumbotron" style={{backgroundImage:"url("+ this.state.currentimg +")"}}>
          <Header />
        </div>

        <div className="home-body">
          <div className="team-logo-container">
            <h2>TEAMS</h2>
            <span className="break"></span>
            <div className="inner-container">
              <a className="links"><img src="../assets/TeamLogos/raptors.png" alt="raptors" className="logos"></img></a>
              <a className="links"><img src="../assets/TeamLogos/celtics.png" alt="celtics" className="logos"></img></a>
              <a className="links"><img src="../assets/TeamLogos/knicks.png" alt="knicks" className="logos"></img></a>
              <a className="links"><img src="../assets/TeamLogos/sixers.png" alt="sixers" className="logos"></img></a>
              <a className="links"><img src="../assets/TeamLogos/nets.png" alt="nets" className="logos"></img></a>

              <a className="links"><img src="../Assets/TeamLogos/cavaliers.png" alt="cavaliers" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/pacers.png" alt="pacers" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/bulls.png" alt="bulls" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/bucks.png" alt="bucks" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/pistons.png" alt="pistons" className="logos"></img></a>

              <a className="links"><img src="../Assets/TeamLogos/hawks.png" alt="hawks" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/hornets.png" alt="wizards" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/wizards.png" alt="wizards" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/magic.png" alt="magic" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/heat.png" alt="heat" className="logos"></img></a>

              <a className="links"><img src="../Assets/TeamLogos/jazz.png" alt="jazz" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/thunder.png" alt="thunder" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/trailblazers.png" alt="trailblazers" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/nuggets.png" alt="nuggets" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/timberwolves.png" alt="timberwolves" className="logos"></img></a>

              <a className="links"><img src="../Assets/TeamLogos/warriors.png" alt="warriors" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/clippers.png" alt="clippers" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/kings.png" alt="kings" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/lakers.png" alt="lakers" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/suns.png" alt="suns" className="logos"></img></a>

              <a className="links"><img src="../Assets/TeamLogos/spurs.png" alt="spurs" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/rockets.png" alt="rockets" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/grizzlies.png" alt="grizzlies" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/pelicans.png" alt="pelicans" className="logos"></img></a>
              <a className="links"><img src="../Assets/TeamLogos/mavericks.png" alt="mavericks" className="logos"></img></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default home
