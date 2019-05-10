import React,{Component} from 'react';

import more from './more_vert.png';



class VerticalNews extends Component{
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
        <div className='verticalNews'>
            <img src={image} alt=''></img>
            <div className="videoDescription">
                <div>
                    <a href=""> <h3>{title}</h3> </a>
                    <p>  {shortDescription} </p>
                </div>
                <div className="authorVideo">
                    <img src={authorImage} alt="" />
                    <a href=""><span>{authorName}</span></a>
                    <br />
                    <input type="data" value={dataPost} className="postData" />
                    
                </div>
                <button><img src={more} alt="" /></button>
            </div>
        </div>
    )
}
}

export default VerticalNews;