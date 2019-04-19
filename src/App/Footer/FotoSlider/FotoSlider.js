import React from 'react';

import slider1 from './fotoSlider1.png';
import slider2 from './fotoSlider2.png';
import slider3 from './fotoSlider3.png';
import slider4 from './fotoSlider4.png';
import slider5 from './fotoSlider5.png';
import slider6 from './fotoSlider6.png';



const FotoSlider = () =>{
    return(
        <div className='fotoSlider'>
            <div><img src={slider1} alt="" /></div>
            <div><img src={slider2} alt="" /></div>
            <div><img src={slider3} alt="" /></div>
            <div><img src={slider4} alt="" /></div>
            <div><img src={slider5} alt="" /></div>
            <div><img src={slider6} alt="" /></div>
            <div><img src={slider3} alt="" /></div>
            <div><img src={slider6} alt="" /></div>
            <div><img src={slider5} alt="" /></div>
            <div><img src={slider2} alt="" /></div>
            <div><img src={slider1} alt="" /></div>
            <div><img src={slider4} alt="" /></div>
        </div>
    )
}

export default FotoSlider;