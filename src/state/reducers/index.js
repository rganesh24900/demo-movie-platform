import movieReducers from './movieReducers'
import { combineReducers } from 'redux'

const reducers =  combineReducers({
    movies:movieReducers
  })


export default reducers