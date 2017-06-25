import React from 'react';

const Video = ({ data }) => (
  <div className="video-component">
    <h3>{ data.snippet.title }</h3>
    <iframe
      title={data.snippet.title}
      id="ytplayer"
      type="text/html" width="100%" height="400"
      src={`https://www.youtube.com/embed/${data.id.videoId}?autoplay=1`} />
  </div>
);

export default Video;
