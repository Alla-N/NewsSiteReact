import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import more from '../more_vert.png';


class FullSizeNews extends Component{

render(){
    const {
        id,
        image,
        title,
        shortDescription,
        authorImage,
        authorName,
        dataPost,

    } = this.props;


    return(
        <div className='fullSize'>
            <img src={image} alt=''></img>
            <a href=""> <h3>{title}</h3>  </a>
            <p>{shortDescription}</p>
            <div className="authorVideo">
                <img src={authorImage} alt="" />
                <a href=""> <span>{authorName}</span>  </a>
                <br />
                <input type="data" defaultValue={dataPost} className="postData" />
                
            </div>
            <button><Link to={`/news/${id}`}><img src={more} alt="" title='Read more' /></Link></button>
        </div>
    )
}
}


export default FullSizeNews;