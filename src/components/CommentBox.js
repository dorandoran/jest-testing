import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from '../actions';
import './app.css';

class CommentBox extends Component {
    state= { comment: '' }

    handleChange= (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='comment-header-div'>
                        <h4 className='comment-header'>Add a Comment</h4>
                    </div>

                    <div className='comment-textarea'>
                        <textarea
                            value={this.state.comment} 
                            onChange={this.handleChange} 
                        />
                    </div>

                    <div className='comment-button'>
                        <button>Submit Comment</button>
                    </div>
                </form>

                <div className='comment-button'>
                    <button className='fetch-button' onClick={this.props.fetchComments}>Fetch Comments</button>
                </div>

            </div>
        );
    }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);