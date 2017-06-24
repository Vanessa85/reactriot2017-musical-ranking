import React, { Component } from 'react';
import Track from './Track';

class Ranking extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getTopTracks();
  }

  render()  {
    const { tracks } = this.props;

    return (
      <div>
        { tracks.map( (item, index) => <Track key={index} item={item} />) }

        Ranking hello
      </div>
    );
  }
}

export default Ranking;
