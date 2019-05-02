import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, Col, Row, Table } from 'react-bootstrap';

//temp
// import usersData from './UsersData';

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  const getBadge = isAdmin => {
    return isAdmin ? 'success' : 'primary';
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.email}</Link>
      </td>
      <td>{user.password}</td>

      <td>
        <Link to={userLink}>
          <Badge color={getBadge(user.isAdmin)}>
            {user.isAdmin ? 'Administrator' : 'User'}
          </Badge>
        </Link>
      </td>
    </tr>
  );
}

class UsersPanel extends Component {
  render() {
    // const userList = usersData.filter(user => user.id < 10);

    const users = this.props.users;

    return (
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <i className="fa fa-align-justify" /> Users{' '}
                <small className="text-muted">registered</small>
              </Card.Header>
              <Card.Body>
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">email</th>
                      <th scope="col">password</th>
                      <th scope="col">administrator</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length
                      ? users.map(user => <UserRow key={user.id} user={user} />)
                      : ''}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UsersPanel;
