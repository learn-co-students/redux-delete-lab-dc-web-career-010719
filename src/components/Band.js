import React, { Component } from 'react';

class Band extends Component {

  render() {
    const { band, deleteBand } = this.props
    return(
      <li>
        Name: {band.name}&nbsp;
        <button onClick={() => deleteBand(band.id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
