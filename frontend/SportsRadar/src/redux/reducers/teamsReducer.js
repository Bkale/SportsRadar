let teamsReducer = function(teamProfile = [],action){
    switch (action.type) {
      case 'GET_CURRENT_TEAM':
        return teamProfile
      default:
        return teamProfile
    }
}
export default teamsReducer
