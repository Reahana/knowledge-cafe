/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
   const spendTime = props.spendTime
   const bookmarked = props.bookmarked
   
    let totalTime = 0 
    
   for (const post of spendTime) {
    totalTime = totalTime + post.readTime; 
    }
   
    let totalBookmarkedBlog = 0;
    let title = '';

     for (const post of bookmarked){
        title =  post.title
         if(post.quantity === 0){
             post.quantity = 1; 
        }
      post.quantity = post.quantity || 1;
      totalBookmarkedBlog = totalBookmarkedBlog + post.quantity;

        
    }
   
    
    return (
        <div className="sidebar">
                <div className="spendTime">
                    <h3>Spent time on read : {totalTime}  </h3>
                </div>
                <div className="bookmark-container">
                <h3>Bookmarked Blogs : {totalBookmarkedBlog} </h3>
                <h3> {title}  </h3>
                </div>
                
        </div>
    );
};

export default Bookmark;