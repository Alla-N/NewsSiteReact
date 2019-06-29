import React from 'react';


const FooterSubscribe = () =>{
    return(
        <div className='footerSubscribe'>
        <div className="container">
				<div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="footerContainerLists">
                            <h3>
                                Subscribe to our newsletter
							</h3>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
						<div className="footerContainerLists">
							<input type="email" className="emailFooter" placeholder="Email Address"/>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-2">
						<div className="footerContainerLists">
							<button className="buttonSubscribeFooter">Subscribe</button>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default FooterSubscribe;