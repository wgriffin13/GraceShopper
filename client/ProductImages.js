import React, { Fragment } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const ProductImages = ({ productImages, prodIdx }) => {
  console.log('productImages', productImages);
  console.log('prodIdx', prodIdx);

  const foundImages = productImages.filter(img => img.productId === prodIdx);

  return (
    <Fragment>
      {foundImages.length ? (
        <Container className="d-flex justify-content-center">
          <Row>
            {foundImages.map(img => (
              <Col key={img.id}>
                <Image src={img.url} style={{ height: '5rem' }} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        'No additional product images available'
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ productImages }) => {
  return {
    productImages
  };
};

export default connect(mapStateToProps)(ProductImages);
