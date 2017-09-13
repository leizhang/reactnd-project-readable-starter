import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostTable from './PostTable';

export default function PostList({ posts, loading, errors, deletePost }) {
  const loadingMessage = (
    <Message icon info>
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>Just one second</Message.Header>
        We are fetching that content for you.
      </Message.Content>
    </Message>
  );

  const emptyMessage = (
    <Message icon info>
      <Icon name="warning circle" />
      <Message.Content>
        <Message.Header>No Posts Found</Message.Header>
        <p>Add some new posts to get started.</p>
        <Link to={'/posts/new'} className="ui button primary">
          Add New Post
        </Link>
      </Message.Content>
    </Message>
  );

  const timeoutMessage = (
    <Message icon negative>
      <Icon name="wait" />
      <Message.Content>
        <Message.Header>{errors.global}</Message.Header>
        Is the backend server running?
      </Message.Content>
    </Message>
  );

  const posttable = () => {
      return <PostTable posts={posts} deletePost={deletePost} />;
  };

  const postList = posttable();

  return (
    <div>
      {loading && loadingMessage}
      {posts.length === 0 && !loading && !errors.global && emptyMessage}
      {errors.global && timeoutMessage}
      {posts.length > 0 && postList}
    </div>
  );
}
