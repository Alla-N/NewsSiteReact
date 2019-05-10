import React from 'react';

import news from '../news.js'

import HorizontalNews from './HorizontalNews/HorizontalNews.js';


const Horizontal = () =>{
    return (
        <div className='horizontal'>
            {
                
                news.slice(1,4).map(({
                    id,
                    image,
                    title,
                    shortDescription,
                    authorImage,
                    authorName,
                    dataPost,
                })=>{
                return(
                    <div key={id}>
                        <HorizontalNews
                            image={image}
                            title={title}
                            shortDescription={shortDescription}
                            authorImage={authorImage}
                            authorName={authorName}
                            dataPost={dataPost}
                        />
                    </div>
                    
                )
                })   
            }
        </div>
    )
}

export default Horizontal;