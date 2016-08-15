import { ActionTypes } from '../actions';

const initialState = {
  posts: {
    all: [],
    post: null,
  },
  error: false,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      // console.log(action.payload.response.data);
      return { ...state, posts: { ...state.posts, all: action.payload.response.data } };
    case ActionTypes.FETCH_POST:
      // console.log(action.payload.response.data);
      return { ...state, posts: { ...state.posts, post: action.payload.response.data } };
    case ActionTypes.CREATE_POST:
      return { ...state, posts: { ...state.posts, all: state.posts.all.concat(action.payload.response.data) } };
    case ActionTypes.UPDATE_POST:
      return { ...state, posts: { ...state.posts, post: action.payload } };
    case ActionTypes.DELETE_POST:
      return { ...state, posts: { ...state.posts, all: action.payload.response.data } };
    case ActionTypes.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default PostReducer;
