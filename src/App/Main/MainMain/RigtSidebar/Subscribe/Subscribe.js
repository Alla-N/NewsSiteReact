import React from 'react';

import facebook from './facebook.png';
import vk from './vk.png';
import pinterest from './pinterest.png';
import dribbble from './dribbble.png';
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
            <input type="text" placeholder="Ihor Ten" />
            <p>Email</p>
            <input type="email" placeholder="email@adress.com" />
            <button>Subscribe</button>
            <p className="orTitle">or</p>
            <div className="subscribeLinks">
                <a><img src={facebook} alt="" /></a>
                <a><img src={vk} alt="" /></a>
                <a><img src={pinterest} alt="" /></a>
                <a><img src={dribbble} alt="" /></a>
                <a><img src={twitter} alt="" /></a>
            </div>
        </div>
    )
}

export default Subscribe;