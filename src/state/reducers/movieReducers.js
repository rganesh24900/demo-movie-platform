import {movieListActions} from '../actions'

const reducer = (state={isLoading:true,movies:[],movieDetails:null,casts:[],page:1,castLoading:true},action) => {
  switch (action.type) {
    case movieListActions.START_LOADING:
        return{...state,isLoading:true};
    case movieListActions.START_CAST_LOADING:
        return{...state,castLoading:true};
    case movieListActions.END_LOADING:
        return{...state,isLoading:false};
    case movieListActions.FETCH_MOVIES:
        return {...state,movies:[...action.payload.results],isLoading:false,page:action.payload?.page};
    case movieListActions.FETCH_BY_SEARCH:
        return {...state,movies:[...action.payload.results],isLoading:false};
    case movieListActions.FETCH_CASTS:
        return {...state,casts:[...action.payload.cast],castLoading:false};
    case movieListActions.FETCH_MOVIE_DETAILS:
        return {...state,movieDetails:action.payload,isLoading:false}
    default:
        return state;
  }
}

export default reducer