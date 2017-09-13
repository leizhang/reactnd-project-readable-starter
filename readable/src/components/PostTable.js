import _ from 'lodash'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class PostTable extends Component {
  state = {
    column: null,
    data: this.props.posts,
    onDelete: this.props.deletePost,
    direction: null,
  };

  handleSort = clickedColumn => () => {
    const {column, data, direction} = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const {column, data, direction, onDelete} = this.state;

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'category' ? direction : null}
                              onClick={this.handleSort('category')}>
              Category
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'title' ? direction : null}
                              onClick={this.handleSort('title')}>
              Title
            </Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'voteScore' ? direction : 'ascending'}
                              onClick={this.handleSort('voteScore')}>
              Current Score
            </Table.HeaderCell>
            <Table.HeaderCell>Deleted?</Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'timestamp' ? direction : null}
                              onClick={this.handleSort('timestamp')}>
              Timestamp
            </Table.HeaderCell>
            <Table.HeaderCell>
              &nbsp;
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({id, category, title, author, body, timestamp, deleted, voteScore}) => (
            <Table.Row key={id}>
              <Table.Cell>{category}</Table.Cell>
              <Table.Cell><Link
                to={`/posts/view/${id}`
                }>
                {title}
              </Link></Table.Cell>
              <Table.Cell>{author}</Table.Cell>
              <Table.Cell>{body}</Table.Cell>
              <Table.Cell>{voteScore}</Table.Cell>
              <Table.Cell>{deleted ? 'Yes' : 'No'}</Table.Cell>
              <Table.Cell>{timestamp}</Table.Cell>
              <Table.Cell>
                <div className="ui two buttons">
                  <Link
                    to={`/posts/edit/${id}`
                    }
                    className="ui basic button green">
                    Edit
                  </Link>
                  <Button basic color="red" onClick={() => onDelete(id)}>
                    Delete
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

PostTable.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostTable;