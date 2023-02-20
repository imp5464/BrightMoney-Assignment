import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';


function Navi() {
  return (
    <Navbar expand = "lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href=''>Adithya Business</Navbar.Brand>
          <Nav className="me-auto">
               
            <Link className = 'link' to='/show'>ShowBills</Link>
            
            <Link className = 'link' to='/add'>AddBills</Link>
            <Link className = 'link' to='/MonthlyBudget'>MonthlyBudget</Link>
           
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navi;