import $ from 'jquery';
import constants from '../constants';

export const getTopTracks = (year, month, limit = 25) => {
  return dispatch => {
    dispatch({ type: 'GET_TOP_TRACKS', payload: { year, month } });
    var month_format = month < 10? `0${month}`: month;

    $.ajax({
      url   : `https://api.vagalume.com.br/rank.php?apikey=${constants.API_KEY_VAGALUME}&type=mus&period=month&periodVal=${year+month_format}&scope=international&limit=${limit}`,
      type  : 'GET'
    }).done( response => {
      dispatch({ type: 'GET_TOP_TRACKS_SUCCESS', payload: response });
    }).fail( err => {
      dispatch({ type: 'GET_TOP_TRACKS_FAILED', payload: err });
    });
  }
}
