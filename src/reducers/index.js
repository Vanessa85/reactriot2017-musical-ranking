import { combineReducers } from 'redux';
import ranking from './ranking';
import trackDetails from './track-details';
import search from './search';

export default combineReducers({
  ranking,
  trackDetails,
  search
});
