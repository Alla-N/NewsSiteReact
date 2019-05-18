import React from 'react';

import FullSizeNews from './FullSizeNews/FullSizeNews.js'

import news from '../news.js'



const FullSize = () =>{
    return(      
        <div> 
            {
                
            news.filter(news=>news.topNews===true).map(({
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
                    />
                </div>
                
            )
            })   
        }
        </div>
    )         
       
}

export default FullSize;