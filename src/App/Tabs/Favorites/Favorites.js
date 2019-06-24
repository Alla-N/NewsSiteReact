import React,{Component} from 'react';
import { connect } from 'react-redux';

import {keys} from 'lodash'

 import news,{getNewsMap} from '../../Main/MainMain/news'

 import VerticalNews from '../../Main/MainMain/Vertical/VerticalNews/VerticalNews';


class Favorites extends Component {

   
    
    state = {
        itemsToShow: 10,
    }

    showMoreNews = () => {

        this.setState((prevState) =>  ({

            itemsToShow: prevState.itemsToShow+3,

        }));

    }

    

render (){

    const filterParameters = this.props.favoriteNews;

    console.log(keys(filterParameters))

    const newsMap=getNewsMap(news);

    console.log(newsMap);

    return(
        <div className='main'>
        <div className='container'>
        <div className='row'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className='vertical'>
        { 
            keys(filterParameters).map(( newsId) => (  
            <div key={newsId}>
            
                        <VerticalNews
                             image={newsMap[newsId].image}
                             title={newsMap[newsId].title}
                             shortDescription={newsMap[newsId].shortDescription}
                             authorImage={newsMap[newsId].authorImage}
                             authorName={newsMap[newsId].authorName}
                             dataPost={newsMap[newsId].dataPost}
                             id={newsMap[newsId].id}
                        />
                    </div>
                    
                )
        )}
        </div>
        <div className="showMoreButton">
            <button onClick = {() => this.showMoreNews() }>
                Show more
			</button>
       
        </div>
        </div>
        </div>
        </div>
        </div>
        
    )
}}

const mapStateToProps = (state) =>({
    favoriteNews: state.favoriteNews,
   })

  
export default connect (mapStateToProps) (Favorites);