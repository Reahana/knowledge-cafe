/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    
    const { title,author,publishDate,readTime,img,coverImg} = props.post;
   const addToSpendTime =props.addToSpendTime;
   const addToBookmarkedBlogs = props.addToBookmarkedBlogs;
  
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
               <p> {readTime} min read <button onClick={() => addToBookmarkedBlogs(props.post)} > <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></button> </p>
            </div>
            
            <div className="post-info">
                <h2>{title}</h2>
                <p>#beginners #programming</p>
                <button onClick={() => addToSpendTime(props.post)}>Mark as read</button>
            </div>
            <hr />
        </div>
    );
};

export default Post;