import React from 'react';

import author from './author.png';
import more from './more_vert.png';



const VerticalNews = () =>{
    return(
        <div className='verticalNews'>
            <iframe 
            src="https://www.youtube.com/embed/_eNdPmvKgtw" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            
            </iframe>
            <div className="videoDescription">
                <div>
                    <a href="">
                        <h3>Develop an Insane WORK ETHIC</h3>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Beatae tempora reprehenderit labore esse officia quod, debitis quos. Eaque maxime accusamus a nemo praesentium officiis voluptatibus, consectetur modi nostrum ipsa nihil.
					</p>
                </div>
                <div className="authorVideo">
                    <img src={author} alt="" />
                    <a href=""><span>Evan Carmichael</span></a>
                    <br />
                    <input type="data" value="April 28, 2016 10:15" className="postData" />
                    <button><img src={more} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default VerticalNews;