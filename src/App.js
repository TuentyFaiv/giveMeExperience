import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Feed from './containers/Feed';
import Profile from './containers/Profile';
import ProfileEdit from './containers/ProfileEdit';
import Projects from './containers/Projects';
import Project from './containers/Project';
import Events from './containers/Events';
import Event from './containers/Event';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/user/:username" component={Profile} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={Event} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
