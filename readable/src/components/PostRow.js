import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function PostRow({ post, deletePost }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="user outline" /> {post.title}
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="body" /> {post.body}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/posts/edit/${post.id}`} className="ui basic button green">
            Edit
          </Link>
          <Button basic color="red" onClick={() => deletePost(post.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

PostRow.propTypes = {
  post: PropTypes.object.isRequired,
};
