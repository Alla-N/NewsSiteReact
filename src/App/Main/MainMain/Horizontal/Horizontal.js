import React from 'react';

import news from '../news.js'

import HorizontalNews from './HorizontalNews/HorizontalNews.js';


const Horizontal = ({filterParameter}) =>{
    return (
        <div className='horizontal'>
            {
                
                (filterParameter === 'all' ? news.filter(news=>news.topNews===false) : news.filter(news=>news.tag===filterParameter).filter(news=>news.tagTopNews===false)).slice(0,3).map(({
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
                            id={id}
                        />
                    </div>
                    
                )
                })   
            }
        </div>
    )
}

export default Horizontal;