import React from 'react';


const MainHeader = () =>{
    return(
        <div>
            <div className="conteiner">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog">Sort blog:</div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><a href="">All</a></div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><a href="">Bisiness</a></div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><a href="">Lifestyle</a></div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><a href="">Trip</a></div>
                    </div>
                    <div classv="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><a href="">Inspiration</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;