import React from 'react';

import author from './author.png';
import more from './more_vert.png';
import horizontal from './horizontal_img.jpg'


const HorizontalNews = () =>{
    return(
        <div className='horizontalNews'>
            <img src={horizontal}></img>
            <div className="videoDescription">
                <div>
                    <a href="">
                        <h3>	The 5 LESSONS In Life People Learn TOO LATE</h3>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quos ad cupiditate quam id! Doloribus excepturi soluta maiores ullam.
					</p>
                </div>
                <div className="authorVideo">
                    <img src={author} alt="" />
                    <a href=""><span>Evan Carmichael</span></a>
                    <br />
                    <input type="data" value="April 28, 2016 10:15" className="postData" />
                    
                </div>
                <button><img src={more} alt="" /></button>
            </div>

        </div>
    )
}

export default HorizontalNews;