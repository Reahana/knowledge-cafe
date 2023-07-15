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
                <h1>Bookmark</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Blogs;