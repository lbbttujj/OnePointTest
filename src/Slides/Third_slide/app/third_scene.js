import React, {Component} from 'react';
import Pagination from '../../../component/pagination/pagination'
import ThirdScene1 from '../first_sub_slide/third_scene_1'
import Toggle from '../../../component/toggle/toggle'
import ThirdScene2 from '../second_sub_slide/third_scene_2'
import ThirdScene3 from '../third_sub_slide/third_scene3'
import funcScroll from '../../../funcScroll/funcScroll'
export default class ThirdScene extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            activeSlide: 0,
            prevSlide: 0
          }
    }
    componentDidMount() {
        this.scroller = funcScroll();
        this.scroller.moveLeft();
      }
    
      onSlideChande(active) {
          console.log(active);
        if (active == this.state.activeSlide) return (0)
        if(this.state.activeSlide < active) {
          this.scroller.moveRight(this.state.activeSlide, active);
        } else {
          this.scroller.moveLeft(this.state.activeSlide, active);
        }
        this.setState({
          activeSlide: active
        })
    }
        
    render()
    {
        const {changeSlide,current} = this.props
        return(
            <>
    
            {/* <Pagination 
             smesh='1890'
             active3={true}
             changeSlide={changeSlide} current={current}
            /> */}
            

            <div className='third-block'>
        <div className='slides-wrapper'>
          <ThirdScene1 />
          <ThirdScene2/>
          <ThirdScene3/>
          
        </div>
        <Pagination 
             smesh='1890'
             active3={true}
             changeSlide={changeSlide} current={current}
            />
        <Toggle
           changeSlide={this.onSlideChande.bind(this)}
           
          />
      </div>
            </>
        )
    }
}