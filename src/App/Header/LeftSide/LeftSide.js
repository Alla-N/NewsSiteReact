import React from 'react';

import icon1 from './header-icon1.png'
import icon2 from './header-icon2.png'
import icon3 from './header-icon3.png'
import icon4 from './header-icon4.png'
import icon5 from './header-icon5.png'
import icon6 from './header-icon6.png'


const LeftSide = () =>{
    return(
        <div className="leftSide">
            <div className="socialIcons">
                <a href=""><img src={icon1} alt=""></img></a>
                <a href=""><img src={icon2} alt=""></img></a>
                <a href=""><img src={icon3} alt=""></img></a>
                <a href=""><img src={icon4} alt=""></img></a>
                <a href=""><img src={icon5} alt=""></img></a>
                <a href=""><img src={icon6} alt=""></img></a>
			</div>
        </div>
    )
}

export default LeftSide;
