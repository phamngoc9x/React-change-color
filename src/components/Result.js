import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3>Color : {this.props.color} - Fontsize : {this.props.size}px</h3>
        <div id="content" style={{color: this.props.color, borderColor:this.props.color, fontSize: (this.props.size) +'px'}}>
          Nội dung setting
        </div>
      </div>
    );
  }
}

export default Result;