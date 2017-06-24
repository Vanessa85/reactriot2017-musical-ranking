import { combineReducers } from 'redux';

const tracks = (state = [], action) => {
  switch (action.type) {
    case 'GET_TOP_TRACKS_SUCCESS':
      return action.payload.mus.month.all;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'GET_TOP_TRACKS':
      return true;
    case 'GET_TOP_TRACKS_SUCCESS':
    case 'GET_TOP_TRACKS_FAILED':
      return false;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'GET_TOP_TRACKS_FAILED':
      return action.payload;
    case 'GET_TOP_TRACKS':
    case 'GET_TOP_TRACKS_SUCCESS':
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  tracks,
  isLoading,
  errorMessage
});
