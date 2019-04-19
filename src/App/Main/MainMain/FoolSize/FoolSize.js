import React from 'react';

import author from './author.png';
import more from './more_vert.png';


const FoolSize = () =>{
    return(
        <div className='foolSize'>
            <iframe 
            width="100%" 
            height="420" 
            src="https://www.youtube.com/embed/2wPeC4CLkLU" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>
            <a href="">
                <h3>	10 SKILLS That Are HARD to Learn, BUT Will Pay Off FOREVER!</h3>
            </a>
            <p>
                The one constant thing in our life is change. 
                We cannot avoid it and the more we resist change the tougher our life becomes. 
                I know this because I was very skilled at deflecting change in life.
			</p>
            <div className="authorVideo">
                <img src={author} alt="" />
                <a href="">
                    <span>Evan Carmichael</span>
                </a>
                <br />
                <input type="data" value="April 28, 2016 10:15" className="postData" />
                <button><img src={more} alt="" /></button>
            </div>
        </div>
    )
}

export default FoolSize;