import React, {Component} from 'react';

import more from './../more_vert.png';


class FoolSizeNews extends Component{

render(){
    const {
        image,
        title,
        shortDescription,
        authorImage,
        authorName,
        dataPost,

    } = this.props;


    return(
        <div className='foolSize'>
            <img src={image} alt=''></img>
            <a href=""> <h3>{title}</h3>  </a>
            <p>{shortDescription}</p>
            <div className="authorVideo">
                <img src={authorImage} alt="" />
                <a href=""> <span>{authorName}</span>  </a>
                <br />
                <input type="data" value={dataPost} className="postData" />
                
            </div>
            <button><img src={more} alt="" /></button>
        </div>
    )
}
}


export default FoolSizeNews;