import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NaviBar() {

    return (
    <>
        <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
            <Navbar.Brand>Helsinki Сity Bike</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/journeys">Journeys</Nav.Link>
                    <Nav.Link as={Link} to="/stations">Stations</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar> 
    </>
)}