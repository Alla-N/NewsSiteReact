import React from 'react';

import news from '../news.js'

import VerticalNews from './VerticalNews/VerticalNews.js';


const Vertical = () =>{
    return(
        <div className='vertical'>
            {
                
                news.slice(4).map(({
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
                        <VerticalNews
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

export default Vertical;