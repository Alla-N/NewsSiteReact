import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import more from './more_vert.png';



class HorizontalNews extends Component {

    changeLikeButtonState = () =>{

        if(this.props.isLiked){
        
        this.props.addDislike(this.props.id)
        
        }else{
        
        this.props.addLike(this.props.id)
        }
        }
        

    render(){
        const {
            id,
            image,
            title,
            shortDescription,
            authorImage,
            authorName,
            dataPost,
            isLiked = false,
    
        } = this.props;

    return(
        <div className='horizontalNews'>
            <img src={image}></img>
            <button className="likeButton"  onClick={()=>this.changeLikeButtonState()}>

            {isLiked? <div>&#10084;</div> :  <div>&#9825;</div>}

        </button>
            <div className="videoDescription">
                <div>
                    <a href=""> <h3>{title}</h3>  </a>
                    <p> {shortDescription} </p>
                </div>
                <div className="authorVideo">
                    <img src={authorImage} alt="" />
                    <a href=""><span>{authorName}</span></a>
                    <br />
                    <input type="data" defaultValue={dataPost} className="postData" />
                    
                </div>
                <button><Link to={`/news/${id}`}><img src={more} alt="" title='Read more' /></Link></button>
            </div>

        </div>
    )
}
}

const mapStateToProps = (state, props) => ({ 

    isLiked: state.likeNews[props.id]
    
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

export default connect (mapStateToProps,mapDispatchToProps) (HorizontalNews);