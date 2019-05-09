import React from 'react';

import FoolSizeNews from './FoolSizeNews/FoolSizeNews.js'

import news from './../news.js'


const FoolSize = () =>{

      news.map(({
            
            image,
            title,
            shortDescription,
            authorImage,
            authorName,
            dataPost,
            
        })=>{
            
    return(
        <FoolSizeNews
            image={image}
            title={title}
            shortDescription={shortDescription}
            authorImage={authorImage}
            authorName={authorName}
            dataPost={dataPost}
        />
    )
    
})
}
export default FoolSize;