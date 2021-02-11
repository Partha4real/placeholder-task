import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Posts.css';


function Posts(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            setPosts(data)
        })
    }, []);

    if(posts.length < 1){
        return <h1>no posts available</h1>
    }
    return (
        <div  className="posts">
            {posts.map(post => (
                <div className="posts_indi" key={post.id}>
                    <h3 className="posts_title">{post.title}</h3> 
                    <p className="posts_body">{post.body}</p> 
                    <Link to={`post/${post?.id}`}><button className="btn_details">Details</button></Link> <hr />
                </div>
            ))}
        </div>
    );
}

export default Posts;