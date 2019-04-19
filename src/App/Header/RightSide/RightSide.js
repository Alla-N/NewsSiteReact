import React from 'react';

import SignIn from './SignIn/SignIn.js'
import Language from './Language/Language.js'


const RightSide = () =>{
    return(
        <div className='rightSide'>
            <div className="conteiner">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <SignIn />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Language />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide;