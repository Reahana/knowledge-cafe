import React from 'react';
import './Post.css'

const Post = (props) => {
    const {title,author,publishDate,readTime,img,coverImg} = props.post;
    return (
        <div className='post'>
            <img src={coverImg} alt="" />
            <div className="user">
                <img src={img} alt="" />
                <div className="user-info">
                    <h3>{author}</h3>
                    <p>{publishDate}</p>
                </div>
            </div>
            <div className="post-info">
                <h2>{title}</h2>
                <p>#beginners</p>
            </div>
            
        </div>
    );
};

export default Post;