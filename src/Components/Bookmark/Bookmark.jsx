/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    // const {bookmarked} = props;
    const bookmarked = props;
   
   console.log(bookmarked.lenght);
    
    let totalTime = 0 
    // let bookmarkedBlog = 0
    
    return (
        <div className="sidebar">
                <div className="spendTime">
                    <h3>Spent time on read : {bookmarked.lenght} </h3>
                </div>
                <div className="bookmark-container">
                <h3>Bookmarked Blogs :  </h3>
                </div>
                
        </div>
    );
};

export default Bookmark;