import React from 'react';
import {Link} from 'react-router-dom';

const HeaderNavMenu = () =>{
    return(
        <div className='headerNavMenu'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Portfolio</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Pages</Link></li>
                <li><Link to='/'>Shop</Link></li>
            </ul>
        </div>
    )
}

export default HeaderNavMenu;