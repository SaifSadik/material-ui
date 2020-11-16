import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { detailId } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data));
    }, [])

    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data));
    }, [])

    const detailStyle = {
        border: '1px solid orange',
        margin: '20px',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div>
            <div style ={detailStyle}>
                <h1>Title: {detail.title}</h1>
                <h3>Body: {detail.body}</h3>
            </div>
            <br />
            <h1 className ="App">Comments</h1>
            {
                comment.map(comments => <Comments comment = {comments}></Comments>)
            }
        </div>
    );
};

export default PostDetails;