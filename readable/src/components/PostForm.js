import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class PostForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load post Asynchronously
    const { post } = nextProps;
    if(post.id !== this.props.post.id) { // Initialize form only once
      this.props.initialize(post);
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
      <Form.Field className={classnames({error:touched && error})}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span className="error">{error.message}</span>}
      </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, post } = this.props;
    return (
        <Grid centered columns={2}>
          <Grid.Column>
            <h1 style={{marginTop:"1em"}}>{post.id ? 'Edit post' : 'Add New post'}</h1>
            <Form onSubmit={handleSubmit} loading={loading}>
              <Field name="category" type="text" component={this.renderField} label="Category"/>
              <Field name="title" type="text" component={this.renderField} label="Title"/>
              <Field name="author" type="text" component={this.renderField} label="Author"/>
              <Field name="body" type="text" component={this.renderField} label="Body"/>
              <Field name="voteScore" type="number" component={this.renderField} label="Current Score"/>
              <Field name="timestamp" type="text" component={this.renderField} label="Time"/>
              <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
            </Form>
          </Grid.Column>
        </Grid>
    )
  }
}

export default reduxForm({form: 'post'})(PostForm);