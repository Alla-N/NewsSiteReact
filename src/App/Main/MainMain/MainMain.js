import React from 'react';

import FullSize from './FullSize/FullSize.js';
import Horizontal from './Horizontal/Horizontal.js';
import Vertical from './Vertical/Vertical.js';
import RigtSidebar from './RigtSidebar/RigtSidebar.js';


const MainMain = ({filterParameter}) =>{
    return(
        <div className='main'>
            <div className="conteiner">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <FullSize />
                        <Horizontal />
                        <Vertical 
                        filterParameter={filterParameter}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <RigtSidebar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainMain;