import React from 'react'
import { Container, Navbar, NavbarBrand, Row, Col, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import CardComp from './CardComp';

function About(props) {
    return (
        <div>
            <div className="mt-5 mb-4">
                <Container>
                    <div>
                        <Navbar
                            color="danger"
                            expand="md"
                            light
                            className="border"
                        >
                            <NavbarBrand href="/">
                                reactstrap
                            </NavbarBrand>
                            <NavbarToggler onClick={function noRefCheck() { }} />
                            <Collapse navbar>
                                <Nav
                                    className="me-auto"
                                    navbar
                                >
                                    <NavItem>
                                        <NavLink href="/home">
                                            Home
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/about">
                                            About
                                    </NavLink>
                                      </NavItem>

                                </Nav>
                                <NavbarText>
                                    Simple Text
                            </NavbarText>
                            </Collapse>
                        </Navbar>
                    </div>
                    {/* ini halaman about */}
                </Container>
            </div>

            <Container>
                <Row>
                    <Col className="col-lg-4">
                        <CardComp 
                        id="1" 
                        judul="Belajar React"
                        tanggal="20/01/2022"
                        />
                    </Col>
             
                    <Col className="col-lg-4">
                        <CardComp 
                                                id="2" 
                        judul="Belajar Golang"
                        tanggal="21/01/2022"
                        />
                    </Col>
             
                    <Col className="col-lg-4">
                        <CardComp
                                                id="3" 
                        judul="Belajar PHP"
                        tanggal="22/01/2022"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;
