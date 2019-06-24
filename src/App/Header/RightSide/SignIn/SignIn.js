import React from 'react';

import icon from './icon-sign_in.png'


const SignIn = () =>{
    return(
        <div className="signIn">
                <a href="#/">
                    <img src={icon} alt=""/>
                    <span>Sign in</span>
				</a>								
        </div>
    )
}

export default SignIn;