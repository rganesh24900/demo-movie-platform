import movieReducers from './movieReducers'
import { combineReducers } from 'redux'

const reducers =  combineReducers({
    moviesState:movieReducers
  })


export default reducers