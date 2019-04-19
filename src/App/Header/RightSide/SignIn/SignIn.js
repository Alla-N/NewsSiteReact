import React from 'react';

import icon from './icon-signin.png'


const SignIn = () =>{
    return(
        <div className="signIn">
                <a href="">
                    <img src={icon} alt=""/>
                    <span>Sign in</span>
				</a>								
        </div>
    )
}

export default SignIn;