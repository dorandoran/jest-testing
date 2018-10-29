import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
    }

    render() {
        return (
            <div>
                <ul className='comment-list'>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ comments }) {
    return { comments };
}

export default connect(mapStateToProps)(CommentList);