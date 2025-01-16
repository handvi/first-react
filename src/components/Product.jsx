import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ title, text, image }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

function ProductSection() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <Row>
        <Col>
          <ProductCard
            title="Product 1"
            text="This is a description of product 1."
            image="https://via.placeholder.com/150"
          />
        </Col>
        <Col>
          <ProductCard
            title="Product 2"
            text="This is a description of product 2."
            image="https://via.placeholder.com/150"
          />
        </Col>
        <Col>
          <ProductCard
            title="Product 3"
            text="This is a description of product 3."
            image="https://via.placeholder.com/150"
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProductSection;
