import _ from 'lodash'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Button, Icon} from 'semantic-ui-react';
import props from 'prop-types';
import {Link} from 'react-router-dom';

class PostRow extends Component {
  state = {
    column: null,
    data: this.props.posts,
    onDelete: this.props.deletePost,
    direction: null,
  };
  constructor(props) {
    super(props);
  }

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
          <Table.HeaderCell sorted={column === 'title' ? direction : 'ascending'}
                            onClick={this.handleSort('title')}>
            Title
          </Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'author' ? direction : null}
                            onClick={this.handleSort('author')}>
            Author
          </Table.HeaderCell>
          <Table.HeaderCell sorted={column === 'voteScore' ? direction : null}
                                               onClick={this.handleSort('voteScore')}>
          Current Score
        </Table.HeaderCell>
          <Table.HeaderCell>
            &nbsp;
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.map(data, ({id, title, author, voteScore}) => (
            <Table.Row key={id}>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{author}</Table.Cell>
              <Table.Cell>{voteScore}</Table.Cell>
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
              </div></Table.Cell>
            </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
  }
}

PostRow.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostRow;