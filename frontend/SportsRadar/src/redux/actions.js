let actions = {
  //ADD TODO
  addTodo: function(text){
    return{
      type:'ADD_TODO',
      text: text
    }
  },
  getCurrentTeam: function(){
    return{
      type: 'GET_CURRENT_TEAM'
    }
  },
  updateTeam: function(team){
    return{
      type: 'UPDATE_TEAM',
      team: team
    }
  }
} // Actions End

export default actions
