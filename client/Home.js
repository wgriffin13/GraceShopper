import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
const seed = require('../server/db/seed');

class Home extends Component {
  render() {
    //temporarily pulling data from seed file
    const categories = seed.categories;

    return (
      <Container className="d-flex">
        <Row>
          {categories.map(category => {
            return (
              <Col lg={true} xl={true} key={category.id}>
                <Card
                  style={{
                    width: '15rem',
                    height: '15rem',
                    backgroundColor: `${category.color}`
                  }}
                  className="my-3 justify-content-center "
                >
                  <Container className="text-center">{category.name}</Container>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Home;
