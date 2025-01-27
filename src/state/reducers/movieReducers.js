import {movieListActions} from '../actions'

const reducer = (state={isLoading:true,movies:[]},action) => {
  switch (action) {
    case movieListActions.FETCH_POPULAR:
        return {...state,movies:[...movies,action.payload],isLoading:false}
    case movieListActions.FETCH_TOP:
        return {...state,movies:[...movies,action.payload],isLoading:false}
    case movieListActions.FETCH_UPCOMING:
        return {...state,movies:[...movies,action.payload],isLoading:false}
    case movieListActions.FETCH_BY_SEARCH:
        return {...state,movies:[...movies,action.payload],isLoading:false}
    default:
        return state;
  }
}

export default reducer