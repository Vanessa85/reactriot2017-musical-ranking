import React from 'react';
import './Track.css';

const Track = ({ item }) => (
  <div className="track">
    <div className="track-image">
      <img src={item.art.pic_small} alt={item.name} />
    </div>
    <div className="track-info">
      <h6>{ item.name }</h6>
      <span>{ item.art.name }</span>
      <span><i className="zmdi zmdi-headset zmdi-hc-fw"></i> { item.rank }</span>
    </div>
  </div>
);

export default Track;
