// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
      name: ''
  }

  handleOnChange = event => {
    // update this.state.name
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // update Store's state! (calling dispatch)
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text" 
            value={this.state.name}
            onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default BandInput
