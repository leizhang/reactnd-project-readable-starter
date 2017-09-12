import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPosts, deletePost } from '../actions';

class PostListPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>List of Posts</h1>

        <PostList
          posts={this.props.posts}
          loading={this.props.loading}
          errors={this.props.errors}
          deletePost={this.props.deletePost}
        />
      </div>
    );
  }
}

// Make posts  array available in  props
function mapStateToProps(state) {
  return {
    posts: state.postStore.posts,
    loading: state.postStore.loading,
    errors: state.postStore.errors,
  };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(
  PostListPage
);
