import { compose, applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunk,logger())
)(createStore)

export default function configureStore(initialState = {teamProfile:[],standings:{},todos: [], user: {}}){
  return finalCreateStore(rootReducer, initialState)
}
