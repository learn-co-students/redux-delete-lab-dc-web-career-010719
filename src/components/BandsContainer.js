import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const { addBand, bands, deleteBand } = this.props
    return (
      <div>
        <BandInput addBand={addBand}/>
        <ul>
          {bands.map((band) => {
            return <Band key={band.id} band={band} deleteBand={deleteBand} />
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: 'ADD_BAND', name }),
    deleteBand: id => dispatch({ type: 'DELETE_BAND', id: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
