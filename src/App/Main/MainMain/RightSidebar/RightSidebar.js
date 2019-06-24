import React from 'react';

import Search from './Search/Search.js';
import Categories from './Categories/Categories.js';
import Subscribe from './Subscribe/Subscribe.js';
import TabPost from './TabPost/TabPost.js';
import Tags from './Tags/Tags.js';


const RightSidebar = () =>{
    return(
        <div className='rightSidebar'>
            <Search />
            <Categories />
            <Subscribe />
            <TabPost />
            <Tags />
        </div>
    )
}


export default RightSidebar;