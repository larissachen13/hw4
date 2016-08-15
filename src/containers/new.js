
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router';

class New extends Component {
  constructor(props) {
    super(props);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
    this.state = { title: '', tags: [], content: '', formerror: false };
    this.createpost = props.createPost;
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleTagChange = (e) => {
    this.setState({ tags: e.target.value.split(' ') });
  };
  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmitChange = () => {
    const post = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    };
    if (!post.title || !post.tags || !post.content) {
      console.log('here');
      this.setState({ formerror: true });
    } else {
      this.setState({ formerror: false });
      this.createpost(post);
    }
  };
  render() {
    let error;
    if (this.state.formerror) {
      error = <div> All Fields must be filled Out! </div>;
    }
    return (
      <div className="create_post">
        {error}
        <h1> Create New Post </h1>
        <form name="newPost">
          <input type="text" onChange={this.handleTitleChange} placeholder="title" />
          <input type="text" onChange={this.handleTagChange} placeholder="tags" />
          <input type="text" onChange={this.handleContentChange} placeholder="content" />
          <button type="button" onClick={this.handleSubmitChange}>Submit</button>
          <Link to="/"><button>Cancel</button></Link>
        </form>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that knows how to call actions
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(createPost(post));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(New);
