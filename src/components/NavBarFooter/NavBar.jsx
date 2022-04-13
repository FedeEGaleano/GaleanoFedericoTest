import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, Container, Form, FormControl} from "react-bootstrap"
import Carrito from "./Carrito"

export default function NavBar(){

    return(
        <>
        <Navbar className="conta"  variant="dark" expand="lg">
            <Container className="conta" >
            <Navbar.Brand className="conta" href="#home">
                <img 
                    alt=""
                    src="/logoShop.png"
                    width="200"
                    height="70"
                    className="d-inline-block align-top conta"
                />{' '}
            </Navbar.Brand>
                <Navbar.Toggle className="conta" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="conta" id="basic-navbar-nav">
                    <Nav className="me-auto conta">
                        <Nav.Link className="conta" href="#home">HOME</Nav.Link>
                        <Nav.Link className="conta" href="#link">REMERAS</Nav.Link>
                        <Nav.Link className="conta" href="#link">BUZOS</Nav.Link>
                        <Nav.Link className="conta" href="#link">SALE! 50% OFF</Nav.Link>
                    </Nav>
                    <Form className="d-flex conta">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="boton" variant="outline-warning">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
                <Nav.Link className="conta">
                <Carrito/>
                </Nav.Link>
                
            </Container>
        </Navbar>
        </>
    )
}