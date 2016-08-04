import React from 'react';
import { Link } from 'react-router';
import ContentArea from '../components/content';

const Show = (props) => {
  return (
    <div className="post-item" id={props.post.id}>
      <div className="header">
        <ul className="left">
          <li className="links">
            <Link className="link"to="/">Back to Index</Link>
            <Link className="link" to="/"> <button onClick={props.deletePost} className="right delete" > Delete </button> </Link>
          </li>
          <li>
            <h2> <ContentArea post={props.post} className="post-title"
              field="title" updatePost={props.updatePost}
            />
            </h2>
          </li>
          <li>
            <h3> <ContentArea post={props.post} className="post-tags"
              field="tags" updatePost={props.updatePost}
            /> </h3>
          </li>
        </ul>
      </div>
      <h3>
        <ContentArea post={props.post} className="post-content"
          field="content" updatePost={props.updatePost}
        />
      </h3>
    </div>
  );
};

export default Show;
