import React,{Component} from 'react';


class MainHeader extends Component{
    render(){

        const {
            filterNews,
        } = this.props;


    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog">Sort news:</div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><button  onClick={()=>filterNews('all')}>All</button></div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><button onClick={()=>filterNews('business')}>Business</button></div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><button onClick={()=>filterNews('lifestyle')}>Lifestyle</button></div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><button onClick={()=>filterNews('trip')}>Trip</button></div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                        <div className="sortBlog"><button onClick={()=>filterNews('inspiration')}>Inspiration</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default MainHeader;