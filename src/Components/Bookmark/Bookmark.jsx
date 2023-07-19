/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
   
    const bookmarked = props.bookmarked;
   
    let totalTime = 0 
    let quantity = 0;
    let title = '';

   for (const post of bookmarked) {
    if(post.quantity === 0){
             post.quantity = 1;
             
         }
         
         post.quantity = post.quantity || 1;
    totalTime = totalTime + post.readTime;
    quantity = quantity + post.quantity;
     

   }
    
   
    // let bookmarkedBlog = 0
    
    return (
        <div className="sidebar">
                <div className="spendTime">
                    <h3>Spent time on read : {totalTime}  </h3>
                </div>
                <div className="bookmark-container">
                <h3>Bookmarked Blogs : {quantity} </h3>
                <h3> {title} </h3>
                </div>
                
        </div>
    );
};

export default Bookmark;