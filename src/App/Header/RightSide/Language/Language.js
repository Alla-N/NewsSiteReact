import React from 'react';

import icon from './header-icon-language.png'


const Language = () =>{
    return(
        <div className='language'>
            <img src={icon} alt="" />
            <select>
                <option>ENG</option>
                <option>RU</option>
                <option>UA</option>
            </select>
        </div>
    )
}

export default Language;
