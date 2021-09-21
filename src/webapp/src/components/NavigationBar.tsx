import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return <Navbar bg="dark" variant="dark">

        <Link className="navbar-brand" to=""><img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
            // src="https://static.whiskybase.com/storage/whiskies/default/big.png?v4"
            alt="bottle pic" width="25"
            height="25"/>Book Store</Link>
        <Nav className="me-auto">

            <Link to="/add" className="nav-link">Add Book</Link>
            <Link to="/list" className="nav-link">Book List</Link>

        </Nav>

    </Navbar>
}

export default NavigationBar;