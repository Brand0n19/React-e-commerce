import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header-image ">
        <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
          <Container fluid className="px-4 pt-2 justify-content-between">
            <Navbar.Brand className="fw-bold ">
              <Link to="/"  >
                PARALLEL
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link >
                    <NavLink to="/">
                      Inicio
                    </NavLink>  
                  </Nav.Link>
                  <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item>
                      <NavLink to="/productos/polo" activeClassName="no-underline">
                        Polo
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/productos/hoddie" activeClassName="no-underline">
                        Hoddie
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/productos/jean" activeClassName="no-underline">
                        Jean
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <NavLink to="/productos">
                        Todo

                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to="/card">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                          </svg>
                  </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/login">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg>
                  </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </header>        
    )
}

export default Header