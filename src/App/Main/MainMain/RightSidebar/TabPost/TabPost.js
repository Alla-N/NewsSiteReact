import React from 'react';

import side1 from './imageSide1.png';
import side2 from './imageSide2.png';
import side3 from './imageSide3.png';
import side4 from './imageSide4.png';




const TabPost = () =>{
    return(
        <div className='tabPost'>
            <div className="sideBarTitle">
                <h3>
                    Tab post widget
				</h3>
            </div>
            <div className="sideBarBlocks">
                <input type="radio" name="odin" defaultChecked="checked" id="vkl1"></input> 
                <label htmlFor="vkl1">Recent post</label>

                <input type="radio" name="odin" id="vkl2"></input>
                <label htmlFor="vkl2">popular post</label>
                <div>
                    <div className="tabPostBlocks">
                        <img src={side1} alt=""></img>
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                    <div className="tabPostBlocks">
                        <img src={side2} alt="" />
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
                    </div>
                    <div className="tabPostBlocks">
                        <img src={side3} alt="" />
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                    <div className="tabPostBlocks">
                        <img src={side4} alt="" />
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                </div>
                <div>
                    <div className="tabPostBlocks">
                        <img src={side3} alt=""/>
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                    <div className="tabPostBlocks">
                        <img src={side1} alt="" />
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                    <div className="tabPostBlocks">
                        <img src={side4} alt="" />
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                    <div className="tabPostBlocks">
                        <img src={side2} alt="" />
                        <p> April 28, 2016 </p>
                        <a href="#/"><h4>Lorem ipsum</h4></a>
					</div>
                </div>
            </div>
        </div>
    )
}

export default TabPost;