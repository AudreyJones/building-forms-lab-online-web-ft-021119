import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
// Should be our Redux Store connection!!!!!



class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

export default BandsContainer
