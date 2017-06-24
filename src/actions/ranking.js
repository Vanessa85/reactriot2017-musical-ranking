import $ from 'jquery';

export const getTopTracks = (limit = 25) => {
  return dispatch => {
    dispatch({ type: 'GET_TOP_TRACKS' });

    $.ajax({
      url   : `https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=mus&period=month&periodVal=201701&scope=international&limit=${limit}`,
      type  : 'GET'
    }).done( response => {
      dispatch({ type: 'GET_TOP_TRACKS_SUCCESS', payload: response });
    }).fail( err => {
      dispatch({ type: 'GET_TOP_TRACKS_FAILED', payload: err });
    });
  }
}
