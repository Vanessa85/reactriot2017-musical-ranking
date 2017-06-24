import { connect } from 'react-redux';
import  { getResults  } from '../../actions/search';
import Search from './Search';

const mapStateToProps = (state) => ({
  results: state.search.results,
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage
});

export default connect(mapStateToProps, { getResults })(Search);
