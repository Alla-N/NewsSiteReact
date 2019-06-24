import React from 'react';

import FullSizeNews from './FullSizeNews/FullSizeNews.js'

import news from '../news.js'



const FullSize = ({filterParameter}) =>{
    return(      
        <div> 
            {   
                (filterParameter === 'all' ? news.filter(news=>news.topNews===true) : news.filter(news=>news.tag===filterParameter).filter(news=>news.tagTopNews===true)).map(({
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
                    <FullSizeNews
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

export default FullSize;