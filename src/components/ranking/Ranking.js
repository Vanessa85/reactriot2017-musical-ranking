import React, { Component } from 'react';
import $ from 'jquery';
import 'nanoscroller';
import Track from './Track';
import 'nanoscroller/bin/css/nanoscroller.css';
import './Ranking.css';

class Ranking extends Component {
  componentDidMount() {
    this.props.getTopTracks();
  }

  componentWillUpdate() {
    $('.nano').nanoScroller({ destroy: true });
    $('.nano').off('scrollend');
  }

  componentDidUpdate() {
    if (!this.props.isLoading) {
      $('.nano').nanoScroller();
      $('.nano').on('scrollend', (e) => {
        const { tracks, getTopTracks } = this.props;
        getTopTracks(tracks.length*2);
      });
    }
  }

  render()  {
    const { tracks, isLoading } = this.props;

    return (
      <div className="nano">
        <div className="nano-content">
          { isLoading?
              this.renderLoading()
            :
              tracks.map( (item, index) => <Track key={index} item={item} />)
          }
        </div>
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="ranking-loading">
        <i className="zmdi zmdi-spinner zmdi-hc-spin zmdi-hc-3x"></i>
      </div>
    );
  }
}

export default Ranking;
