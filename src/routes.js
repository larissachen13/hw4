import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import IndexContainer from './containers/indexContainer';
import New from './containers/new';
import ShowContainer from './containers/showContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={IndexContainer} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={ShowContainer} />
  </Route>
);
