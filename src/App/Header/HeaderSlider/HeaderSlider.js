import React from 'react';

import author from './author.png';
import forum from './forum.png';
import favorite from './favorite_border.png'



const HeaderSlider = () =>{
    return(
        <div className='headerSlider'>
            <div>
                <h3>
                    Inspiration
				</h3>
                <a href="">
                    <h1>
                        5 Ways milllennials can start
                        building their future today
					</h1>
                </a>
                <div className="sliderButton">
                    <button>
                        Read more
					</button>
                </div>
                <div className="author">
                    <div className="authorPhoto"><img src={author} alt="" /></div>
                    <a href=""><p>Henry Little</p></a>
                    <div><input type="data" value="April 28, 2016 10:15" readOnly className="postData" /></div>
                    <div className="comentsLikes">
                        <div>
                            <img src={forum} alt="" />
                            <span>Comments</span>
                            <span>07</span>

                        </div>
                        <div>
                            <img src={favorite} alt="" />
                            <span>Likes</span>
                            <span>28</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSlider;