import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PostListPage from './pages/PostList';

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
        <Route exact path="/" component={PostListPage} />
        {/*<Route path="/contacts/new" component={ContactFormPage}/>*/}
        {/*<Route path="/contacts/edit/:_id" component={ContactFormPage}/>*/}
      </Container>
    );
  }
}

export default App;
