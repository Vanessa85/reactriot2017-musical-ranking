import $ from 'jquery';
import constants from '../constants';

export const getResults = (query) => {
  return dispatch => {
    dispatch({ type: 'SEARCH_VIDEOS' });

    $.ajax({
      type  : 'get',
      url   : `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&order=viewCount&type=video&maxResults=10&key=${constants.API_KEY_YOUTUBE}`
    }).done( response => {
      dispatch({ type: 'SEARCH_VIDEOS_SUCCESS', payload: response.items });
    }).fail( err => {
      dispatch({ type: 'SEARCH_VIDEOS_FAILED', payload: err });
    });
  }
}
