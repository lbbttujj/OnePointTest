import React, {Component} from 'react';
import Pagination from '../../component/pagination/pagination'
import Osnova_terapii from '../../component/osnova-terapii/osnova_terapii'
import Next from '../../component/next_slide/next'
import Ices from '../../component/Ices/Ices'
import './style.css'

export default class SecondScene extends Component
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
           <Pagination
           smesh='1120'
           active2={true}
           changeSlide={changeSlide} current={current}
           />
            <Osnova_terapii/>
            <Ices/>
            <div className='second-text'></div>
           
            <Next
             smesh='1390'
            />
            
            </>
        )
    }
}