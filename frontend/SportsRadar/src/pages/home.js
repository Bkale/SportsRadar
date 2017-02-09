import React, { Component } from 'react'
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
      <div>
        <div className="jumbotron" style={{backgroundImage:"url("+ this.state.currentimg +")"}}>
          <div className="navMenu">
            <strong>SPORTSRADAR</strong>
            <nav>
              <a>STANDINGS</a>
              <a>TEAMS</a>
              <a>PLAYERS</a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default home
