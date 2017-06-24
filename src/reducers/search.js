import { combineReducers } from 'redux';

const results = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS_FAILED':
    case 'SEARCH_VIDEOS_SUCCESS':
      return false;
    case 'SEARCH_VIDEOS':
      return true;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS':
    case 'SEARCH_VIDEOS_SUCCESS':
      return null;
    case 'SEARCH_VIDEOS_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  results,
  isLoading,
  errorMessage
});
