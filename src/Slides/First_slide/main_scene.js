import React, {Component} from 'react';
import './style.css'
import Circles from '../../component/pulsation_circle/pulsationCircle'
import Pagination from '../../component/pagination/pagination'
import Next from '../../component/next_slide/next'
import Text_Main from '../../component/text_first_slide/text'
export default class MainScene extends Component
{
    constructor(props)
    {
        super(props)

    }
    
    render()
    {
        const {changeSlide,current} = this.props
        return(
            <>
            <div className='background_1'>
                <Text_Main/>
                <Circles/>
                <Pagination 
                changeSlide={changeSlide} current={current} active1={true}
                />
                <Next/>         
            </div>
              </>
        )
    }
}