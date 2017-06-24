import React from 'react';

const Card = ({ item }) => (
  <div className="medium-6 large-6 columns">
    <div className="card">
      <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
      <div className="card-section">
        <h4><a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">{ item.snippet.title }</a></h4>
        <p>{ item.snippet.description }</p>
      </div>
    </div>
  </div>
);

export default Card;
