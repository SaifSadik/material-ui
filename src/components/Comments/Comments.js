import React from 'react';

const Comments = (props) => {
    console.log(props);
    const { name, email } = props.comment;

    const commentStyle = {
        border: '1px solid red',
        margin: '50px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style ={commentStyle} className = "App">
            
            <h4>Commenter: {name}</h4>
            <h5>Email: {email}</h5>
        </div>
    );
};

export default Comments;