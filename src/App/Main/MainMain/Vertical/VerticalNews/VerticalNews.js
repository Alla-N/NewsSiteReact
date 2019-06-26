import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import more from './more_vert.png';
import like from '../../like.png';
import unlike from '../../unlike.png'



class VerticalNews extends Component{

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
        <div className='verticalNews'>
        <button className="likeButton"  onClick={()=>this.changeLikeButtonState()}>

        {isLiked? <div><img src={like} alt=''></img></div> :  <div><img src={unlike} alt=''></img></div>}

        </button>
        <div className="NewsImgVertical"><Link to={`/news/${id}`}><img src={image} alt=''></img></Link></div>
            <div className="videoDescription">
            

                <div className="videoDescriptionShortText">
                    <Link to={`/news/${id}`}> <h3>{title}</h3> </Link>
                    <p>  {shortDescription} </p>
                </div>
                <div className="authorVideo">
                    <a href="#/"><img src={authorImage} alt="" /></a>
                    <a href="#/"><span>{authorName}</span></a>
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
    

export default connect (mapStateToProps,mapDispatchToProps) (VerticalNews);