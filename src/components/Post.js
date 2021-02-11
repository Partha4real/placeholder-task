import React, { useEffect, useState } from 'react';
import './Post.css';


function Post({match}) {
    const id = match.params.id;
    const [post, setPost] = useState();
    const [comments, setComments]= useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            setPost(data);

            if(data) {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(response => response.json())
                    .then(data => {
                        setComments(data)
                    })
            }
        })
    }, [id]);
    

    if(!post){
        return <h1>Loading...</h1>
    }
    return (
        <div className="post">
                <div className="posts_indi">
                    <h3 className="posts_title">{post.title}</h3> 
                    <p className="posts_body">{post.body}</p> 
                </div>
                <hr />
                <b>COMMENTS</b> <br />
                {comments.length <1 ?<h2>No comments available</h2> : comments.map(comment => (
                    <React.Fragment key={comment.id}>
                        <div className="commmentdetails">
                            <b className="comment_name">{comment.name}</b>
                            <p className="comment_body">{comment.body}</p> <hr />
                        </div>
                    </React.Fragment>
                ))}
        </div>
    );
}

export default Post;