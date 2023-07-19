/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Post from '../Post/Post';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
    const [posts,setPosts] = useState([]);
    const [bookmarked,setBookmarked] = useState([]);

    useEffect (()=>{

    },[])

    useEffect(()=>{
        fetch('posts.json')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])

    const addToSpendTime = (post) =>{
       const newBookmarked = [...bookmarked,post]
       setBookmarked(newBookmarked );
      
       
    }

    return (
        <div className='blogs-container'>
            <div className="posts-container">
                {
                    posts.map( post => <Post 
                        key = {post.id}
                        post = {post}
                        addToSpendTime = {addToSpendTime}> 
                        </Post>)
                }
                
            </div>
            <div className='sidebar-container'>
                <Bookmark bookmarked = {bookmarked}  ></Bookmark>
               
                
            </div>
        </div>
    );
};

export default Blogs;