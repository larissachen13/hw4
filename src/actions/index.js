import axios from 'axios';
const ROOT_URL = 'https://hw5-express-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=larissa_chen';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};


export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
        // do something with response.data  (some json)
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: { response },
      });
    }).catch(error => {
  // hit an error do something else!
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
        // do something with response.data  (some json)
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: { response },
      });
    }).catch(error => {
  // hit an error do something else!
    });
  };
}

export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then(response => {
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: { response },
      });
      browserHistory.push('/');
    }).catch(error => {
      // ///
    });
  };
}

export function updatePost(post, id) {
  return (dispatch) => {
    console.log(post);
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post);
    dispatch({
      type: ActionTypes.UPDATE_POST,
      payload: post,
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
      axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
          // do something with response.data  (some json)
        dispatch({
          type: ActionTypes.DELETE_POST,
          payload: { response },
        });
      }).catch(error => {
    // hit an error do something else!
      });
    }).catch(error => {
// error
    });
  };
}
