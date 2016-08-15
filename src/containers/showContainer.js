import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost, deletePost } from '../actions';
import Show from '../components/show';

// example class based component (smart component)
class ShowContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }
  handleDelete() {
    this.props.deletePost(this.props.params.id);
  }
  render() {
    if (this.props.post === null) {
      return (<div> Loading..</div>);
    } else if (this.props.error === true) {
      return (<div> Sorry! There was an error in fetching the blog posts </div>);
    } else {
      console.log(this.props.post.title);
      return (
        <Show post={this.props.post} updatePost={this.props.updatePost}
          deletePost={this.handleDelete}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      dispatch(fetchPost(id));
    },
    updatePost: (post, id) => {
      dispatch(updatePost(post, id));
    },
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
