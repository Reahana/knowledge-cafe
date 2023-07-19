/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
   const spendTime = props.spendTime
   const bookmarkedBlog = props.bookmarkedBlog
   
    let totalTime = 0 
    
   for (const post of spendTime) {
    totalTime = totalTime + post.readTime; 
    }
   
    let totalBookmarkedBlogs = 0
    let title = '';

     for (const post of bookmarkedBlog){
         if(post.totalBookmarkedBlogs === 0){
             post.totalBookmarkedBlogs = 1;
             title = post.title;
        }
      post.totalBookmarkedBlogs = post.totalBookmarkedBlogs || 1;
      title = post.title;
        totalBookmarkedBlogs = totalBookmarkedBlogs + post.totalBookmarkedBlogs;
     }
    
    return (
        <div className="sidebar">
                <div className="spendTime">
                    <h3>Spent time on read : {totalTime}  </h3>
                </div>
                <div className="bookmark-container">
                <h3>Bookmarked Blogs : {totalBookmarkedBlogs} </h3>
                <h3> {title} </h3>
                </div>
                
        </div>
    );
};

export default Bookmark;