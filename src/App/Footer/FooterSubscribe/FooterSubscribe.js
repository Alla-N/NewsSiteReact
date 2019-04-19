import React from 'react';


const FooterSubscribe = () =>{
    return(
        <div className='footerSubscribe'>
        <div class="conteiner">
				<div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="footerConteinerLists">
                            <h2>
                                Subscribe to our newsletter
							</h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
						<div class="footerConteinerLists">
							<input type="email" class="emailFooter" placeholder="Email Adress"/>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-2">
						<div class="footerConteinerLists">
							<button class="buttonSubscribeFooter">Subscribe</button>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default FooterSubscribe;