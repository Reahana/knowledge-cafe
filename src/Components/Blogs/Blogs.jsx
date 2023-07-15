/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Post from '../Post/Post';

const Blogs = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('posts.json')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div className='blogs-container'>
            <div className="posts-container">
                {
                    posts.map( post => <Post 
                        key = {post.id}
                        post = {post}></Post>)
                }
                
            </div>
            <div className='sidebar-container'>
                <div className="sidebar">
                    <div className="spendTime">
                        <h3>Spent time on read : </h3>
                    </div>
                    <div className="bookmark">
                    <h3>Bookmarked Blogs : </h3>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Blogs;