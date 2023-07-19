/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Post from '../Post/Post';
import Bookmark from '../Bookmark/Bookmark';
import { addToDb, getBookCart  } from '../../utilities/fakedb';

const Blogs = () => {
    const [posts,setPosts] = useState([]);
   const [bookmarked,setBookmarked] = useState([]);
    const [spendTime,setSpendTime] = useState([]);

    useEffect(()=>{
        fetch('posts.json')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])

    // useEffect(()=>{
    //     const storedCart =getBookCart();
    //     const savedCart = [];
    //      // step 1: get id of the addedPost
    //     for(const id in storedCart){
    //         // step 2: get product from products state by using id
    //         const addedPost = posts.find(post => post.id === id)
    
    //         if(addedPost){
    //             // step 3: add quantity
    //             const quantity = storedCart[id];
    //             addedPost.quantity = quantity;
    //             // step 4: add the added product to the saved cart
    //             savedCart.push(addedPost);
    //         }
    //           console.log('added Post', addedPost)
    //     }
    
    //             // step 5: set the cart
    //             setBookmarked(savedCart);

    // },[posts])

    const addToSpendTime = (post) =>{
       const newSpendTime = [...spendTime,post]
       setSpendTime(newSpendTime );
    }
    const addToBookmarkedBlogs = (post) =>{
        const newBookmarked = [...bookmarked,post]
        setBookmarked(newBookmarked );
         addToDb(post.id);
     }
   

    return (
        <div className='blogs-container'>
            <div className="posts-container">
                {
                    posts.map( post => <Post 
                        key = {post.id}
                        post = {post}
                        addToSpendTime = {addToSpendTime}
                        addToBookmarkedBlogs ={addToBookmarkedBlogs}> 
                        </Post>)
                }
                
            </div>
            <div className='sidebar-container'>
                <Bookmark spendTime = {spendTime} 
                bookmarked = {bookmarked} ></Bookmark>
               
                
            </div>
        </div>
    );
};

export default Blogs;