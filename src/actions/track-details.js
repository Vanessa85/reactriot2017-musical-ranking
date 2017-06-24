import $ from 'jquery';

const API_KEY = 'AIzaSyCCngdUTPsUbINeTBg0rAtn1CURDLR5ueY';

export const getVideo = (query) => {
  return dispatch => {
    dispatch({ type: 'GET_VIDEO_YOUTUBE' });

    $.ajax({
      type  : 'get',
      url   : `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&order=viewCount&type=video&maxResults=1&key=${API_KEY}`
    }).done( response => {
      let data = response.items[0] || {};
      dispatch({ type: 'GET_VIDEO_YOUTUBE_SUCCESS', payload: data });
    }).fail( err => {
      dispatch({ type: 'GET_VIDEO_YOUTUBE_FAILED', payload: err });
    });
  }
}
