import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={()=>this.props.reset()}>reset</button>
    );
  }
}

export default Reset;