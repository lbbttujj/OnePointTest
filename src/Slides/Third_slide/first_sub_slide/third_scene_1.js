import React, {Component} from 'react';
import Toggle from '../../../component/toggle/toggle'
import Ices_third_1 from '../../../component/Ices_third1/Ices'
import Tabs_1 from '../../../component/tabs_1/tabs_1'
import './style.css'

export default class ThirdScene1 extends Component
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
            <div className='first-slide horizontal-slide'>
            <div className='background_3'></div>
            {/* <Toggle
            polygonPos='0'
            changeSlide={changeSlide}
            /> */}
            <Ices_third_1/>
            <Tabs_1/>
            </div>
            </>
        )
    }
}