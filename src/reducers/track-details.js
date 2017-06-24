import { combineReducers } from 'redux';

const video = (state = {}, action) => {
  switch (action.type) {
    case 'GET_VIDEO_YOUTUBE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'GET_VIDEO_YOUTUBE':
      return true;
    case 'GET_VIDEO_YOUTUBE_SUCCESS':
    case 'GET_VIDEO_YOUTUBE_FAILED':
      return false;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'GET_VIDEO_YOUTUBE':
    case 'GET_VIDEO_YOUTUBE_SUCCESS':
      return null;
    case 'GET_VIDEO_YOUTUBE_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  video,
  isLoading,
  errorMessage
});
