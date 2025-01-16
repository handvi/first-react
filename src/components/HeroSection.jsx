import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <Container
      fluid
      style={{ minHeight: '100vh' }}
      className="bg-primary text-white text-center d-flex flex-column justify-content-center"
    >
      <h1>Welcome to Blue shop</h1>
      <p>online digital shop in here :)</p>
    </Container>
  );
}

export default HeroSection;
