import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ categories }) => {
  return (
    <Container className="d-flex">
      <Row>
        {categories.map(category => {
          return (
            <Col lg={true} xl={true} key={category.id}>
              <Link to={`/products/category/${category.id}`}>
                <Card
                  style={{
                    width: '15rem',
                    height: '15rem',
                    backgroundColor: `${category.color}`,
                  }}
                  className="my-3 justify-content-center "
                >
                  <Container className="text-center">{category.name}</Container>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ categories }) => {
  return {
    categories,
  };
};

export default connect(mapStateToProps)(Home);
