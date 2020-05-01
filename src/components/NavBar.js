import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand >algorand-blockchain-list</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="https://github.com/jafidiesel/algorandBlockchainList" target="_blank">code</Nav.Link>
            </Nav>
            <Nav inline>
                <Nav.Link href="http://jafibravin.com/" target="_blank"><Button variant="outline-primary" >web</Button></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;