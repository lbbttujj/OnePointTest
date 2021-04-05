import React, {Component} from 'react';
import './style.css'
export default class Next extends Component
{
constructor(props)
    {
        super(props)
    }
    render()
    {
        const {smesh} = this.props
        return(
            <>
              <div style={{top:`${smesh}px`}} className="next">
                   <div className='arrow-down'>
                   <div className='next-text'></div>
                   </div>
                   <div className='next-elipse'></div>
                   <div className='next-strong-elispe'></div>
               </div>
            </>
        )
    }
}