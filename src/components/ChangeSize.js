import React, { Component } from 'react';

class ChangeSize extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : {this.props.size}px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success" onClick= {()=>this.props.minus()}>Giảm</button>&nbsp;
          <button type="button" className="btn btn-success" onClick= {()=>this.props.plus()}>Tăng</button>
        </div>
      </div>
    );
  }
}

export default ChangeSize;