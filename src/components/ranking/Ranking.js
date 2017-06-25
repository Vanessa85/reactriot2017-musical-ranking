import React, { Component } from 'react';
import $ from 'jquery';
import 'nanoscroller';
import Track from './Track';
import Setting from './Setting';
import 'nanoscroller/bin/css/nanoscroller.css';
import './Ranking.css';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.onSetting = this.onSetting.bind(this);
  }

  componentDidMount() {
    const { year, month } = this.props;
    this.props.getTopTracks(year, month);
  }

  componentWillUpdate() {
    $('.nano').nanoScroller({ destroy: true });
    $('.nano').off('scrollend');
  }

  componentDidUpdate() {
    if (!this.props.isLoading) {
      $('.nano').nanoScroller();
      $('.nano').on('scrollend', (e) => {
        const { tracks, getTopTracks, year, month } = this.props;
        getTopTracks(year, month, tracks.length*2);
      });
    }
  }

  render()  {
    const { tracks, isLoading, year, month } = this.props;

    return (
      <div className="nano">
        <div className="nano-content">
          <Setting year={year} month={month} onSubmit={this.onSetting} />
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

  onSetting(year, month) {
    this.props.getTopTracks(year, month);
  }
}

export default Ranking;
