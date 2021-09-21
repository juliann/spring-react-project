import React from 'react';


import './App.css';
import NavigationBar from "./components/NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import {Route, Router, Switch} from "react-router-dom";
import Book3 from "./components/Book3";
import history from './components/history';


function App() {
    return (
        <Router history={history}>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Switch>
                            <Route path="/" exact component={Welcome}/>
                            <Route path="/add" exact component={Book3}/>
                            <Route path="/edit/:id" exact component={Book3}/>
                            <Route path="/list" exact component={BookList}/>
                        </Switch>
                    </Col></Row>
            </Container>
            <Footer/>
        </Router>
    );
}

export default App;
