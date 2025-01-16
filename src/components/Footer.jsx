import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyFooter() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p>&copy; 2025 BlueShop. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default MyFooter;
