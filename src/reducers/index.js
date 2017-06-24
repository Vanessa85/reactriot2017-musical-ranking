import { combineReducers } from 'redux';
import ranking from './ranking';
import trackDetails from './track-details';

export default combineReducers({
  ranking,
  trackDetails
});
