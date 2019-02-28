import React, { Component } from 'react';
import ChangeSize from './components/ChangeSize'
import PickColor from './components/PickColor'
import Result from './components/Result'
import Reset from './components/Reset'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'pink'],
      colorActive: 'red',
      fontSize: 14
    }
  }
  getColorPicker = (color) => {
    this.setState({
      colorActive: color
    })
  }
  sizePlus =() => {
    let font = this.state.fontSize;
    if(font <= 34) {
      this.setState({
        fontSize: font + 2 
      })
    }
  }
  sizeMinus =() => {
    let font = this.state.fontSize;
    if(font >= 10) {
      this.setState({
        fontSize: font - 2
      })
    }
  }
  resetAll = () =>{
    this.setState({
      colorActive: 'red',
      fontSize: 14
    })
  }
  render() {
    return (
      <div className='container mt-50'>
        <div className='row'>
          <h1 className='text-center'>Change color and font size text</h1>
          <PickColor colorChange={this.state.colors}  getColor={this.getColorPicker} status={this.state.colorActive}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ChangeSize plus={this.sizePlus} minus={this.sizeMinus} size={this.state.fontSize}/>
            <Reset reset={this.resetAll}/>
          </div>
          <Result color={this.state.colorActive} size={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
