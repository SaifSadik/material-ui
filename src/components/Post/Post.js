import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;

    const postStyle = {
        border: '1px solid lightgray',
        margin: "30px",
        padding: '20px',
        borderRadius: "20px",
    }

    const spanStyle = {
        color: "goldenrod",
    }

    return (
        <div style={postStyle} className = 'App'>
            <h1> <span style={spanStyle}>post ID: </span>{id}</h1>
            <h1> <span style={spanStyle}> Title: </span> {title}</h1>

            <Link to = {`/detail/${id}`}><Button variant="contained" color="primary" style={{textDecoration:"none"}}> See Details </Button> </Link>

            
        </div>
    );
};

export default Post;