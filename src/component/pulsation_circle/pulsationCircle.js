import React, {Component} from 'react';
import './style.css'
export default class Circles extends Component
{
    constructor()
    {
        super()
        this.pulsating = ()=>
        {
            
        }
    }
    render()
    {
        return(
            <>

                <div className='moving-circles_top'>
                    <div className='circle bigCircle_t'></div>
                    <div className='circle middleCircle'></div>
                    <div className='circle smallCircle'></div>
                </div>

                
                <div className='moving-circles_left'>
                    <div className='circle bigCircle'></div>
                    <div className='circle middleCircle'></div>
                    <div    className='circle smallCircle'></div>
                   
                </div>

                <div className='moving-circles_right'>
                    <div className='circle bigCircle'></div>
                    <div className='circle middleCircle'></div>
                    <div className='circle smallCircle'></div>
                   
                </div>

                <div className='moving-circles_bottom'>
                    <div className='circle bigCircle'></div>
                    <div className='circle middleCircle'></div>
                    <div className='circle smallCircle'></div>
                    
                </div>

            </>
        )
    }

}