import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Home = ({ categories }) => {
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
                  // backgroundColor: 'white'
                  backgroundColor: `${category.color}`
                }}
                className="my-3 justify-content-center "
              >
                <Card.Link href={`/#/products/category/${category.id}`}>
                  {/* <Card.Text
                    className="text-center"
                    style={{
                      fontSize: '23px',

                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    {category.name}
                  </Card.Text> */}
                  <Card.Text
                    className="white-text-with-blue-shadow text-center"
                    style={{
                      fontSize: '22px',
                      color: 'white',
                      // color: 'black',
                      // color: `${category.color}`,
                      /* offset-x | offset-y | blur-radius | color */
                      textShadow: `10px 10px 50px ${category.color},
                       -10px -10px 50px ${category.color},
                        -10px 10px 50px ${category.color},
                        10px -10px 50px ${category.color}`

                      // textShadow:
                      //   '25px 25px 50px black, 0 0 1em blue, 0 0 0.2em blue'
                    }}
                  >
                    {category.name}
                  </Card.Text>
                </Card.Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ categories }) => {
  return {
    categories
  };
};

export default connect(mapStateToProps)(Home);
