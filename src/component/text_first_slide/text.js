import React, {Component} from 'react';
import './style.css'
export default class Text_Main extends Component
{
constructor(props)
    {
        super(props)
    }
    render()
    {

        return(
            <>
             <div className='texts'>
                <div className='txt-headline'></div>
                <div className='text-top hba1c'></div>
                <div className= 'text-top gipoklemia'></div>
                <div className= 'text-top hardCd'></div>
                <div className= 'text-top CCrisks'></div>
                </div>
            </>
        )
    }
}