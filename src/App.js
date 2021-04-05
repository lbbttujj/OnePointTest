import logo from './logo.svg';
import React, { Component } from 'react';
import MainScene from '../src/Slides/First_slide/main_scene'
import SecondScene from './Slides/Second_slide/Second-scene'

import ThirdScene from '../src/Slides/Third_slide/app/third_scene'
import Pagination from './component/pagination/pagination'
import './App.css';
let test=1;

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      current: 0,
      translateLayer: false
    }
    this.onTouchStart =(e)=> {
      this.startTouchY = e.touches[0].clientY;
      this.setState({translateLayer: false})
    }
    this.onTouchEnd = (e)=>{
      this.EndTouchY = e.changedTouches[0].clientY;
      console.log(this.startTouchY - this.EndTouchY);
      if(this.startTouchY - this.EndTouchY > 50 && this.state.current <= 1) {
        this.setState({current: +this.state.current + 1, translateLayer: true})
      }
      if(this.startTouchY - this.EndTouchY < -50 && this.state.current >= 1) {
        this.setState({current: +this.state.current - 1,  translateLayer: true})
      }
    }
  
    this.onChangeSlide=(e)=>{
      console.log(`target id ${e.target.id}`);
      this.setState({current: e.target.id-1, translateLayer: true})
    }
  }
  render()
  {
 
  return (
    <>
    <div className="App" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
    <div className='App-wrapper' style={{transform: `translateY( ${this.state.current * -100}%)`}}>
   
  
    {/* <Pagination changeSlide={this.onChangeSlide} current={this.state.current} active='1'/> */}
    <MainScene
    changeSlide={this.onChangeSlide} current={this.state.current}
    />
    <SecondScene
    changeSlide={this.onChangeSlide} current={this.state.current}
    />
    <ThirdScene
     changeSlide={this.onChangeSlide} current={this.state.current}
    />
    
    </div>
    </div>
    </>
  );
}
}
export default App;
