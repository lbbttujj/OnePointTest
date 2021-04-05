import React, {Component} from 'react';
import './style.css'
export default class Pagination extends Component
{
constructor(props)
    {
      super(props)
    }

    
    render()
    {
        let active_1,active_2,active_3
        const {changeSlide,current,smesh,active1='',active2='',active3=''} = this.props
        active1 ? active_1='active-elipse' : active_1='';
        active2 ? active_2='active-elipse' : active_2='';
        active3 ? active_3='active-elipse' : active_3='';
        const current_=current;
        
            return(
                <>
                     <div style={{top:`${smesh}px`}} className='elipses'>
                    <div id='1' onClick={changeSlide}  className={`elipse ${active_1}`}></div>
                    <div id='2' onClick={changeSlide}  className={`elipse ${active_2}`}></div>
                    <div id='3' onClick={changeSlide}  className={`elipse ${active_3}`}></div>
                </div>
                </>
            )
        }

}