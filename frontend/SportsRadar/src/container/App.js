import React, { Component } from 'react';
import '../style/App.css';
import { connect } from 'react-redux'
import actions from '../redux/actions'
import { bindActionCreators } from 'redux'



class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
