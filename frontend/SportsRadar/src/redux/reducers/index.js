import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import teamProfile from './teamsReducer'


const rootReducer = combineReducers({
  teamProfile: teamProfile,
  standings: teamProfile,
  todos: todoReducer,
  user: userReducer,
})

export default rootReducer
