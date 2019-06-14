import React from 'react';
import {Link} from 'react-router-dom';

const NavButtons = () =>{
    return(
        <div className='navButtons'>
            <div><button></button></div>
            <div><Link to='/favorites'><button></button></Link></div>
            <div><Link to='/shop'><button></button></Link></div>
        </div>
    )
}

export default NavButtons;