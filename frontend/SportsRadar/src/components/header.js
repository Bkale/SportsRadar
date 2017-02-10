import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import '../style/header.css'

class header extends Component{

render(){
  return(
      <div className="navMenu">
        <strong>SPORTSRADAR</strong>
        <nav>
          <h3>STANDINGS</h3>
          <h3>TEAMS</h3>
          <h3>PLAYERS</h3>
        </nav>
      </div>
  )
}

}
export default header
