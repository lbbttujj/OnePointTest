import React, {Component} from 'react';
import './style.css'

export default class Ices extends Component
{
    constructor(props)
    {
        super(props)

    }
    
    render()
    {
        return(
            <>
            <div className='ice R_T'></div>
            <div className='ice L_T'></div>
            <div className='ice R_B'></div>
            <div className='ice L_B'></div>
            </>
        )
    }
}