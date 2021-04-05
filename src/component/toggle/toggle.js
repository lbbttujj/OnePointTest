import React, {Component} from 'react';
import './style.css'
export default class Toggle extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            position: 0,
            startPos: 0,
            endPos: 588,
            centerPos: 296,
            touchEnd: false
          }
          
    }
    onTouchStart (e) {
        this.setState({
          touchEnd: false,
          startPos: e.touches[0].clientX - this.state.position
         
        })
      }
    
      onTouchMove (e){
        const { position, centerPos, endPos } = this.state;
        const relPos = e.touches[0].clientX - this.state.startPos;
    
        if(relPos >= this.state.endPos || relPos <= 0 ) return
        this.setState({
          position: relPos
        })
        if(position < centerPos / 2) {
          this.props.changeSlide(0);
          console.log('done0');
        } else if (position >= centerPos / 2 && position < endPos - ((endPos - centerPos) / 2)) {
          this.props.changeSlide(1);
          console.log('done1');
        } else {
          this.props.changeSlide(2);
        }
      }
    
      onTouchEnd (e) {
        const { position, centerPos, endPos } = this.state;
        this.setState({
          touchEnd: true
        })
        if(position < centerPos / 2) {
          this.setState({ position: 0 });
        } else if (position >= centerPos / 2 && position < endPos - ((endPos - centerPos) / 2)) {
          this.setState({ position: centerPos });
        } else {
          this.setState({ position: endPos });
        }
      }
    render()
    {
        console.log(this.state.startPos);
        const {position } = this.state;
        const {polygonPos,smesh,smesh_t} =this.props;

      
        return(
            <>
             <div style={{left:`${smesh}px`}} className='scroller-progress' style={{width: position, transition: this.state.touchEnd ? '1s': '0s'}}>
            <div style={{left:`${smesh}px`,top:`${smesh_t}px`}}  className='shape'>


                <div 
                
            style={{left:`${polygonPos}px`,transform: `translate(${this.state.position}px, -50%)`, transition: this.state.touchEnd ? '1s': '0s'}} 
             onTouchStart={this.onTouchStart.bind(this)}
             onTouchMove={this.onTouchMove.bind(this)}
             onTouchEnd={this.onTouchEnd.bind(this)}
             className='years polygon'>

             </div>
            <div className='years _1988'></div>
            <div className='years _2009'></div>
            <div className='years _2016'></div>
                </div>
            </div>
            </>
        )
    }
}