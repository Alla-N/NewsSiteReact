import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './FullPageNews.css'
import news from './news'

class FullPageNews extends Component {
    render(){
    // let prodId = this.props.location.pathname.split('/');
    
    // prodId = prodId[prodId.length-1];

    let newsId = this.props.match.params.id;

    console.log (this.props)
    console.log(newsId)
   
    
    let newsOne;
    for(var i=0; i<news.length; i++){
        if(news[i].id==newsId){
            newsOne = news[i];
            break;
        }
    }
    if(newsOne===undefined)
        return <h2>Page not found</h2>;
    else

        return (
            <div className = 'fullPageNews'>
                <div>
                {newsOne.fullDescription}
                </div>
                <div className = 'returnButton'><Link to='/'><button>Back</button></Link></div>
            </div>) ;
}}




export default FullPageNews