import { connect } from 'react-redux';
import { getVideo } from '../../actions/track-details';
import TrackDetails from './TrackDetails';

const mapStateToProps = (state) => ({
  video: state.trackDetails.video,
  isLoading: state.trackDetails.isLoading,
  errorMessage: state.trackDetails.errorMessage
});

export default connect(mapStateToProps, { getVideo })(TrackDetails);
