import React from 'react';
import { Link } from 'react-router';

const Index = (props) => {
  const postItems = props.posts.map((post) => {
    return (
      <div className="post-list-item" key={post.id}>
        <span> <Link className="link" to={`posts/${post.id}`}> {post.title} </Link> </span>
        <span> {post.tags} </span>
      </div>
      );
  });

  return (
    <div className="posts-home">
      <h1> Posts </h1>
      <ul className="posts-list">
        {postItems}
      </ul>
    </div>
  );
};

export default Index;
