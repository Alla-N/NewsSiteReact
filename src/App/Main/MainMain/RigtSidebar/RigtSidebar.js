import React from 'react';

import Search from './Search/Search.js';
import Categoris from './Categoris/Categoris.js';
import Subscribe from './Subscribe/Subscribe.js';
import TabPost from './TabPost/TabPost.js';
import Tags from './Tags/Tags.js';


const RigtSidebar = () =>{
    return(
        <div className='rigtSidebar'>
            <Search />
            <Categoris />
            <Subscribe />
            <TabPost />
            <Tags />
        </div>
    )
}


export default RigtSidebar;