import React from 'react';

const Video = ({ data }) => (
  <div>
    <h1>{ data.snippet.title }</h1>
    <iframe
      title={data.snippet.title}
      id="ytplayer"
      type="text/html" width="100%" height="360"
      src={`http://www.youtube.com/embed/${data.id.videoId}?autoplay=1`} />
  </div>
);

export default Video;
