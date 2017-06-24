import { connect } from 'react-redux';
import { getTopTracks } from '../../actions/ranking';
import Ranking from './Ranking';

const mapStateToProps = (state) => ({
  tracks: state.ranking.tracks,
  isLoading: state.ranking.isLoading
});

export default connect(mapStateToProps, { getTopTracks })(Ranking);
