import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newPost, savePost, fetchPost, updatePost } from '../actions';
import PostForm from '../components/PostForm';


class PostFormPage extends Component {

  state = {
    redirect: false
  }

    componentDidMount = () => {
      const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchPost(_id);
    } else {
      this.props.newPost();
    }
  }

  submit = (post) => {
    if(!post.id) {
      return this.props.savePost(post)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
        throw new SubmissionError(this.props.errors)
      })
    } else {
      return this.props.updatePost(post)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
        throw new SubmissionError(this.props.errors)
      })
    }
  }

  render() {
    return (
        <div>
          {
            this.state.redirect ?
                <Redirect to="/" /> :
                <PostForm post={this.props.post} loading={this.props.loading} onSubmit={this.submit} />
          }
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.postStore.post,
    errors: state.postStore.errors
  }
}

export default connect(mapStateToProps, {newPost, savePost, fetchPost, updatePost})(PostFormPage);
