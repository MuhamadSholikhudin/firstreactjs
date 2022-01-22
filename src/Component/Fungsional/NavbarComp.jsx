import React from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
// import { container } from 'webpack'

export default function NavbarComp() {
    return ( <div className="mt-5">
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
            </Container>
        </div>
    )
}
