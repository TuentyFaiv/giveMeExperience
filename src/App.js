import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './widgets/components/Layout';
import Login from './auth/containers/Login';
import Register from './auth/containers/Register';
import Feed from './feed/containers/Feed';
import Profile from './users/containers/Profile';
import ProfileEdit from './users/containers/ProfileEdit';
import Projects from './projects/containers/Projects';
import Project from './projects/containers/Project';
import Events from './events/containers/Events';
import Event from './events/containers/Event';
import DirectMessages from './dms/containers/DirectMessages';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/user/:username" component={Profile} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={Event} />
          <Route exact path="/dms" component={DirectMessages} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
