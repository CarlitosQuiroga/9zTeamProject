import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.css'
import {Link} from 'react-router-dom'
import Navs from './linksNav';
import Row from 'react-bootstrap/Row';





function BasicExample() {
  return (
    <Navbar bg='black' variant='dark' expand="lg">
      <Container>
        <Row>
        <Navbar.Brand as={Link} to="/Home"><img src='./logos/img1.png' width={70} alt="" ></img>
        </Navbar.Brand>
        </Row>
        <Row>
        </Row>
        <Row><Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Navs/>  
        </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default BasicExample;