import React from "react";
import {Col, Container, Navbar} from "react-bootstrap";

const Footer = () => {

    let fullYear = new Date().getFullYear();
    return <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container><Col lg={12} className="text-center text-muted">
            <div>{fullYear} All Rights Reserved by ME</div>
        </Col></Container>
    </Navbar>


}
export default Footer;