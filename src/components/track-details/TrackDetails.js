import React, { Component } from 'react';
import 'url-search-params-polyfill';
import Video from './Video';

class TrackDetails extends Component {
  componentDidMount() {
    var search = new URLSearchParams(this.props.location.search);
    const { getVideo } = this.props;
    getVideo(search.get('song'));
  }

  componentWillReceiveProps(nextProps) {
    var searchOld = new URLSearchParams(this.props.location.search);
    var searchNext = new URLSearchParams(nextProps.location.search);

    if (searchOld.get('song') !== searchNext.get('song')) {
      const { getVideo } = this.props;
      getVideo(searchNext.get('song'));
    }
  }

  render() {
    const { isLoading, video, errorMessage } = this.props;

    if (isLoading) {
      return this.renderLoading()
    } else if (!errorMessage && Object.keys(video).length) {
      return <Video data={video} />
    } else {
      return <h1>Error</h1>
    }
  }

  renderLoading() {
    return (
      <div className="ranking-loading">
        <i className="zmdi zmdi-spinner zmdi-hc-spin zmdi-hc-3x"></i>
      </div>
    );
  }

}

export default TrackDetails;
