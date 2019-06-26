import React,{Component} from 'react';
import { connect } from 'react-redux';
import './FullPageNews.css';
import news from '../../Main/MainMain/news';
import like from '../../Main/MainMain/like.png';
import unlike from '../../Main/MainMain/unlike.png';

class FullPageNews extends Component {

    

    changeLikeButtonState = () =>{
        

        if(this.props.isLiked){
        
        this.props.addDislike(this.props.match.params.id)
        
        }else{
        
        this.props.addLike(this.props.match.params.id)
        }
        }

        

    render(){


        console.log(this.props)

    let newsId = this.props.match.params.id;
    let isLiked = this.props.isLiked;
    
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
            <button className="likeButton"  onClick={()=>this.changeLikeButtonState()}>

            {isLiked? <div><img src={like} alt=''></img></div> :  <div><img src={unlike} alt=''></img></div>}

            </button>
                <div>
                {newsOne.fullDescription}
                </div>
                <div className = 'returnButton'><button onClick={()=>this.props.history.goBack()}>Back</button></div>
            </div>) ;
}}

const mapStateToProps = (state, props) => ({ 

    isLiked: state.likeNews[props.match.params.id]
    
    });

    const mapDispatchToProps = (dispatch) =>({

        addLike: (id) => dispatch({
        type:'LIKE',
        id:id,
        }),
        
        addDislike: (id) => dispatch({
        type:'DISLIKE',
        id:id,
        }),
        });


export default connect (mapStateToProps,mapDispatchToProps) (FullPageNews)