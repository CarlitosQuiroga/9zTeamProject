import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.css'
import {Link} from 'react-router-dom'

const Navs = () => { 
  return (
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" >Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/SobreNosotros">Sobre nosotros</Nav.Link>
          </Nav>
  );
}

export default Navs;