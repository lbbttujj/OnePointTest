import React, {Component} from 'react';
import Toggle from '../../../component/toggle/toggle'
import Ices_third_2 from '../../../component/Ices_third2/Ices'
import Tabs_2 from '../../../component/tabs_2/tabs_2'
import './style.css'

export default class ThirdScene2 extends Component
{
    constructor(props)
    {
        super(props)

    }
    
    render()
    {
        const {changeSlide} = this.props
        return(
            <>
            <div className='second-slide horizontal-slide'>
            <div className='background_3_2'></div>
            {/* <Toggle
            polygonPos = '278'
            smesh = '1257'
            smesh_t = '2200'
            changeSlide={changeSlide}
            /> */}
            <Ices_third_2/>
            <Tabs_2/>
            </div>
            </>
        )
    }
}