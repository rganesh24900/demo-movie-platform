import {movieListActions} from '../actions'

const reducer = (state={isLoading:true,movies:[],casts:[],page:1},action) => {
  switch (action.type) {
    case movieListActions.FETCH_MOVIES:
        return {...state,movies:[...action.payload?.results],isLoading:false,page:action.payload?.page};
    case movieListActions.FETCH_BY_SEARCH:
        return {...state,movies:[action.payload],isLoading:false};
    case movieListActions.FETCH_CASTS:
        return {...state,casts:[action.payload],isLoading:false};
    default:
        return state;
  }
}

export default reducer