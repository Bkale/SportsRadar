import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../redux/actions'
import { bindActionCreators } from 'redux'
import Home from '../pages/home'
import '../style/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}; //End of Class APP


function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
