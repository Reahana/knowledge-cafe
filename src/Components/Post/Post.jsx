/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    const test= ()=>{
console.log('ok');
    }
    const {title,author,publishDate,readTime,img,coverImg} = props.post;
    return (
        <div className='post'>
            <img className='cover' src={coverImg} alt="" />
            <div className="upper-section">
                <div className="user">
                    <img src={img} alt="" />
                    <div className="user-info">
                        <h3>{author}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>{readTime} min read <button className='bookmark' onClick={test}><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></button></p>
            </div>
            
            <div className="post-info">
                <h2>{title}</h2>
                <p>#beginners #programming</p>
                <button>Mark as read</button>
            </div>
            
        </div>
    );
};

export default Post;