import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container, Button, Divider } from 'semantic-ui-react';
import PostListContainer from './containers/PostListContainer';
import PostFormContainer from "./containers/PostFormContainer";

class App extends Component {
  render() {
    return (
      <Container>
        <Divider />
        <Button.Group basic>
          <Button><NavLink className="item" activeClassName="active" exact to="/">
            Posts List
          </NavLink></Button>
          <Divider />
          <Button><NavLink
            className="item"
            activeClassName="active"
            exact
            to="/posts/new"
          >Add Post</NavLink></Button>
        </Button.Group>
        <Route exact path="/" component={PostListContainer} />
        <Route path="/(:category)" component={PostListContainer} />
{/*        <Route path="/category/:_category" component={PostListContainer} />*/}
        <Route path="/posts/new" component={PostFormContainer}/>
        <Route path="/posts/edit/:_id" component={PostFormContainer}/>
      </Container>
    );
  }
}

export default App;
