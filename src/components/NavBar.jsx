import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Button, Container, Form, FormControl} from "react-bootstrap"


export default function NavBar(){

    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logoShop.png"
                    width="200"
                    height="70"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">REMERAS</Nav.Link>
                        <Nav.Link href="#link">BUZOS</Nav.Link>
                        <Nav.Link href="#link">SALE! 50% OFF</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
        </>
    )
}