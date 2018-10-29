import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import './app.css';

export default () => {
    return (
        <div className='app-main'>
            <CommentBox />
            <CommentList />
        </div>
    );
};
