import React from 'react';

import BNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <BNavbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-4">
            <Container>

                <BNavbar.Brand href="#home"  >
                    logo
                </BNavbar.Brand>
                <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown title="Franchise" id="collasible-nav-dropdown" className="drop-down">
                            <NavDropdown.Item  className="navbar-link">
                                <NavLink to="/fondamental" className="nav-link " style={{color:"black"}}>
                                    les fondamentaux
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/advantages" className="nav-link" style={{color:"black"}}>
                                    les avantages etexigences
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/numbers" className="nav-link" style={{color:"black"}}>
                                    Les chiffres clés
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/advantages" className="nav-link" style={{color:"black"}}>
                                    Le cadre reglementaire
                                </NavLink>
                            </NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Enseignes" id="collasible-nav-dropdown" >
                            <NavDropdown.Item >
                                <NavLink to="/network" className="nav-link" style={{color:"black"}}>
                                    Les réseaux adérents
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/experts" className="nav-link" style={{color:"black"}}>
                                    Les experts adérents
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/services" className="nav-link" style={{color:"black"}}>
                                    Les services dédiés
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Franchiseur" id="collasible-nav-dropdown">
                            <NavDropdown.Item >
                                <NavLink to="/franchisor-steps" className="nav-link" style={{color:"black"}}>
                                    Les étapes de construction
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <NavLink to="/register" className="nav-link" style={{color:"black"}}>
                                    Adhérer
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Franchisé" id="collasible-nav-dropdown">
                            <NavDropdown.Item >
                                <NavLink to="/franchisee-steps" className="nav-link" style={{color:"black"}}>
                                    Les étapes de construction
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <NavLink to="/register" className="nav-link" style={{color:"black"}}>
                                    Adhérer
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to="/login" className="nav-link">Se connecter</NavLink>
                        <NavLink to="/register" className="nav-link">Adhérer</NavLink>

                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    )
}

export default NavBar