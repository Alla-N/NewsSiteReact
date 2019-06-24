import React from 'react';

import facebook from './facebook.png';
import vk from './vk.png';
import pinterest from './pinterest.png';
import dribble from './dribble.png';
import twitter from './twitter.png';


const Subscribe = () =>{
    return(
        <div className='subscribe'>
            <div className="sideBarTitle">
                <h3>
                    Subscribe
				</h3>
            </div>
            <p>Name</p>
            <input type="text" placeholder="Igor Ten" />
            <p>Email</p>
            <input type="email" placeholder="email@address.com" />
            <button>Subscribe</button>
            <p className="orTitle">or</p>
            <div className="subscribeLinks">
                <a href="#/"><img src={facebook} alt="" /></a>
                <a href="#/"><img src={vk} alt="" /></a>
                <a href="#/"><img src={pinterest} alt="" /></a>
                <a href="#/"><img src={dribble} alt="" /></a>
                <a href="#/"><img src={twitter} alt="" /></a>
            </div>
        </div>
    )
}

export default Subscribe;