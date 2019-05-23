import React,{Component} from 'react';

import news from '../news.js'

import VerticalNews from './VerticalNews/VerticalNews.js';


class Vertical extends Component {

   
    
    state = {
        itemsToShow: 9,
    }

    showMoreNews = () => {

        this.setState((prevState) =>  ({

            itemsToShow: prevState.itemsToShow+3,

        }));

    }

render (){

    const filterParameter = this.props.filterParameter;

    return(
        <div>
        <div className='vertical'>
            {                
                (filterParameter === 'all' ? news : news.filter(news=>news.tag==filterParameter).filter(news=>news.tagTopNews===false)).slice(3,this.state.itemsToShow).map(({
                    id,
                    image,
                    title,
                    shortDescription,
                    authorImage,
                    authorName,
                    dataPost,
                })=>{
                return(
                    <div key={id}>
                        <VerticalNews
                            image={image}
                            title={title}
                            shortDescription={shortDescription}
                            authorImage={authorImage}
                            authorName={authorName}
                            dataPost={dataPost}
                            id={id}
                        />
                    </div>
                    
                )
                })   
            }
        </div>
        <div className="showmoreButton">
            <button onClick = {() => this.showMoreNews() }>
                Show more
			</button>
        </div>
        </div>
    )
}}

export default Vertical;