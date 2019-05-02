import React, { Component } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

class UsersPanel extends Component {
  render() {
    // const user = seedUsers.find( user => user.id.toString() === this.props.match.params.id)

    // const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    const users = this.props.users;
    console.log('users', users);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            {users.length ? users.map(usr => {
              return (
                <Card key={usr.password}>
                  <Card.Header>
                    <strong>
                      <i className="icon-info pr-1" />
                      User Email: {usr.email}
                    </strong>
                  </Card.Header>
                  <Card.Body>
                    <Table responsive striped hover>
                      <tbody>
                        <tr>
                          <td>{usr.password}</td>
                          <td>
                            {usr.isAdmin ? (
                              <strong>Administrator</strong>
                            ) : (
                              <strong>User</strong>
                            )}
                          </td>
                        </tr>
                        )}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              ): 'sorry' )}
                             )} }

          </Col>
        </Row>
      </div>
    );
  }
}

export default UsersPanel;
