import React from 'react';
import { Badge, Card, Col, Pagination, Table, Row } from 'react-bootstrap';

const InventoryPanel = props => {
  const products = props.products;
  console.log('products', products);
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <i className="fa fa-align-justify" /> Product Inventory
          </Card.Header>
          <Card.Body>
            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date Added</th>
                  <th>Category</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.length
                  ? products.map(product => (
                      <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.createdAt}</td>
                        <td>{product.categoryId}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <Badge variant="success">InStock</Badge>
                        </td>
                      </tr>
                    ))
                  : 'no data'}
              </tbody>
            </Table>

            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default InventoryPanel;
