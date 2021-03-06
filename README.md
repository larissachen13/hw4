# HW 4 With Redux 

## Description
  This is a CRUD blogging platform that utilizes redux with React. It is implemented with capabilites to create a new blog post, update a previously created one, and delete one. The index home page of the blog shows a list of all the posts with the title on the left and its tags on the right. Each post title in the list is a link to the full-show view of the entire post. Github markdown is supported for the contents of the post. 
  
## Implementation 
  I created four actions to handle manipulating the notes database: 
    `export function fetchPosts() {/* axios get */}
    export function createPost(post) {/* axios post */}
    export function updatePost(post, id) {/* axios put */}
    export function fetchPost(id) {/* axios get */}
    export function deletePost(id) {/* axios delete */}`
  These actions such as createPost and deletePost lag a little as the new index page doesn't update until the post is created and then the whole collection is fetched again. 
    
  The routes for the page are: 
    `<Route path="/" component={App}>
    <IndexRoute component={IndexContainer} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={ShowContainer} />
    </Route>`
  The id parameter in the URL specifies which note should be shown 
  
  
  ## Extra Credit 
  Error Handling: Added a `state.error` which is set to be true anytime the `ActionType.ERROR` is dispatched. This action is dispatched inside of any catch of an error during the AJAX call. Each component and container checks if an error is flagged, and if so it returns an error message: "<div> Sorry! There was an error in fetching the blog posts </div>" 
  
  InputForm Validation: 
  Give the new component a formError state. If any of the fields are not filled out, set that state to true and Display the error and do not call the createPost action


