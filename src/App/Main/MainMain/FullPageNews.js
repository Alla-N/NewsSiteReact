import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './FullPageNews.css'
import news from './news'

class FullPageNews extends Component {
    render(){
    let prodId = this.props.location.pathname.split('/');
    prodId = prodId[prodId.length-1];

    console.log (this.props)
    console.log(prodId)
   
    
    let newsOne;
    for(var i=0; i<news.length; i++){
        if(news[i].id==prodId){
            newsOne = news[i];
            break;
        }
    }
    if(newsOne===undefined)
        return <h2>Страница не найдена</h2>;
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