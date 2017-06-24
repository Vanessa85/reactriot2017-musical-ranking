import React from 'react';

const Track = ({ item }) => (
  <div>
    <div>
      <img src={item.art.pic_small} alt={item.name} />
    </div>
    <div>
      <h4>{ item.name }</h4>
      { item.rank }
      Artist: { item.art.name }
    </div>
  </div>
);

export default Track;
