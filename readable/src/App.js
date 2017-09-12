import React, { Component } from 'react';
import PostList from '../components/PostList';
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Image,
//   Menu,
//   Segment,
// } from 'semantic-ui-react';

class App extends Component {


  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <Header as="h1">Readable</Header>
        <div>
          <PostList />
        </div>
      </Container>
    );
  }
}

export default App;
