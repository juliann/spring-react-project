import React from 'react';


import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Book2 from "./components/Book2";
import Book3 from "./components/Book3";


function App() {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/add" exact component={Book3}/>
                            <Route path="/list" exact component={BookList}/>
                        </Switch>
                    </Col></Row>
            </Container>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
