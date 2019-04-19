import React from 'react';

import LeftSide from './LeftSide/LeftSide.js'
import RightSide from './RightSide/RightSide.js'
import Logo from './Logo/Logo.js'
import HeaderNavMenu from './HeaderNavMenu/HeaderNavMenu.js'
import NavButtons from './NavButtons/NavButtons.js'


const Header = () =>{
    return(
        <div>
            <div className="headerBlock">
                <div className="conteiner">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9">
                            <LeftSide/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <RightSide/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
			    <div className="conteiner">
				    <div className="row">
					    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <Logo/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                            <HeaderNavMenu/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <NavButtons/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  
  export default Header;