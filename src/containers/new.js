import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router';

let title, tags, content;
const handleTitleChange = (e) => {
  title = e.target.value;
};
const handleTagChange = (e) => {
  tags = e.target.value;
};
const handleContentChange = (e) => {
  content = e.target.value;
};
const handleSubmit = (props) => {
  const post = {
    title,
    tags,
    content,
  };
  props.createPost(post);
};

const New = (props) => {
  const handleSubmitChange = () => { handleSubmit(props); };
  return (
    <div className="create_post">
      <h1> Create New Post </h1>
      <form name="newPost">
        <input type="text" onChange={handleTitleChange} placeholder="title" />
        <input type="text" onChange={handleTagChange} placeholder="tags" />
        <input type="text" onChange={handleContentChange} placeholder="content" />
        <Link to="/">
          <button type="button" onClick={handleSubmitChange}>Submit</button>
        </Link>
        <Link to="/"><button>Cancel</button></Link>
      </form>
    </div>
  );
};

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
