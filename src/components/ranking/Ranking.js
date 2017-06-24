import React, { Component } from 'react';
import $ from 'jquery';
import 'nanoscroller';
import Track from './Track';
import 'nanoscroller/bin/css/nanoscroller.css';
import './Ranking.css';

class Ranking extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getTopTracks();
    // $('.nano').nanoScroller({
    //   preventPageScrolling: true
    // });
    // $('.nano').nanoScroller();
  }

  componentDidUpdate() {
    if (!this.props.isLoading) {
      $('.nano').nanoScroller();
    }
  }

  render()  {
    const { tracks, isLoading } = this.props;

    return (
      <div className="nano">
        <div className="nano-content">
          { tracks.map( (item, index) => <Track key={index} item={item} />) }
          { isLoading? this.renderLoading() : null }
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
