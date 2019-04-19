import React from 'react';

import FoolSize from './FoolSize/FoolSize.js';
import Horizontal from './Horizontal/Horizontal.js';
import Vertical from './Vertical/Vertical.js';
import RigtSidebar from './RigtSidebar/RigtSidebar.js';


const Main = () =>{
    return(
        <div className='main'>
            <div className="conteiner">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <FoolSize />
                        <Horizontal />
                        <Vertical />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <RigtSidebar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;