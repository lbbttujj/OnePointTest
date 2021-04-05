import React, {Component} from 'react';
import Toggle from '../../../component/toggle/toggle'
import Ices_third_3 from '../../../component/Ices_third3/Ices'
import Tabs_3 from '../../../component/tabs_3/tabs_3'
import './style.css'

export default class ThirdScene3 extends Component
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
            <div className='third-slide horizontal-slide'>
            <div className='background_3_3'></div>
            <div className='CD2'></div>
            <div className='CD2_'></div>
            <Ices_third_3/>
            <Tabs_3/>
           
             {/*<div className='insulin'>Инсулинорезистентность</div>
            <div className='rect'></div>
            <div className='giperglik_3'>Гипергликемия</div>
            <div className='gluk'> ↑ глюкагон</div> */}
          </div>
          
           
            </>
        )
    }
}