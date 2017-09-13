import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PostListContainer from './containers/PostListContainer';
import PostFormContainer from "./containers/PostFormContainer";

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Posts List
          </NavLink>
          <NavLink
            className="item"
            activeClassName="active"
            exact
            to="/posts/new"
          >
            Add Post
          </NavLink>
        </div>
        <Route exact path="/" component={PostListContainer} />
        <Route path="/posts/new" component={PostFormContainer}/>
        <Route path="/posts/edit/:_id" component={PostFormContainer}/>
      </Container>
    );
  }
}

export default App;
