import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Index from '../components/index';

/*
This will be the default page. It will display a list of posts. These posts
can look like whatever you want. The posts will be stored in the redux state
rather than any single component so this will need to be a connected component
that connects to state.posts.all.
Try the curl commands above, you’ll see that one of the fields you get back
in the JSON is id. You’ll use that construct Link elements to posts/postid
when you render the posts. Each post should be clickable to open it full
page using the router.

Min specs at a glance:
  -default page listing all posts
  -show title and tags (for now)
  -use post id to link to full view
  */

class IndexContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();  // fetch initial posts
    // console.log(this.props.posts);
  }
  render() {
    return (
      <div>
        <Index posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts.all,
  };
};


export default connect(mapStateToProps, { fetchPosts })(IndexContainer);
