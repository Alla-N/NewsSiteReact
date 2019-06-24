import React from 'react';

import FullSize from './FullSize/FullSize.js';
import Horizontal from './Horizontal/Horizontal.js';
import Vertical from './Vertical/Vertical.js';
import RightSidebar from './RightSidebar/RightSidebar.js';



const MainMain = ({filterParameter}) =>{
    return(
        <div className='main'>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <FullSize 
                            filterParameter={filterParameter}
                        />
                        <Horizontal 
                            filterParameter={filterParameter}
                        />
                        <Vertical 
                            filterParameter={filterParameter}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <RightSidebar />
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default MainMain;