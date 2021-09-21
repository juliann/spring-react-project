import {Button, Form} from "react-bootstrap";
import IBookData from "../types/book.type";
import {useForm} from "../hooks/UseForm";
import http from "../hooks/http-common";
import {faEdit, faList, faSave, faUndo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import {MyToast} from "./MyToast";
import history from './history';
import {useParams} from "react-router-dom";

import {stringify} from "querystring";
import axios from "axios";

const Book3 = (props: any) => {

    const params = useParams();

    const [book, setBook] = useState<IBookData>({
        id: '',
        title: '',
        author: '',
        coverPhotoURL: '',
        isbnNumber: '',
        language: '',
        price: ''

    })

    const
        [showToast, setShowToast] = useState(false);

    const {onChange, onSubmit, values} = useForm(
        loginUserCallback,
        book
    );


    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        if (book.id) {

            axios.put("http://localhost:8081/rest/books", book).then(value => {
                console.log("HELLO" + (JSON.stringify(value.data)))
                setBook(JSON.stringify(value.data))
            )

            })


            console.log("true id:" + book.id)
            console.log("current book" + (book.author));
            const response: IBookData = await http.put("", book);
            console.log("new book" + (response.author));
            setBook(response)
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
        } else {
            console.log("false id:" + book.id)
            let response: IBookData = await http.post("", values);
            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)
        }

    }

    useEffect(() => {
        const fetchBook = async () => {
            // const response = await fetch("http://localhost:8081/rest/books/" + params);
            // const response: IBookData = await http.get("http://localhost:8081/rest/books/" + params);
            // const response: IBookData = await http.get("http://localhost:8081/rest/books/fecffd6d-8847-48e4-be7c-98310b646976");
            const response = await fetch("http://localhost:8081/rest/books/" + stringify(params).substr(3));
            const data = await response.json();
            setBook(data);
        }
        fetchBook();
    }, [])


    const bookList = () => {
        history.push("/list")
    }

    function componentDidMount() {
        if (book.id === '') {
            console.log("empty id" + book.id)
            http.get("" + book.id)
        } else {
            console.log("id exists:" + book.id)
        }
    }

    const resetBook = () => {
        console.log("reset")
    }

    const updateBook = () => {
        console.log("update")
    }


    return <div>
        <div style={{"display": showToast ? "block" : "none"}}>
            <MyToast message={"  Book saved successfully"} buttonType={"success"}/>
        </div>

        <div className="card" style={{width: "30rem"}}>
            <h5 className=" card-title">Add New Book</h5>
            <Form onSubmit={onSubmit} onReset={resetBook}>
                <div className=" card-body">

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name='title' defaultValue={book.title}
                                      id='title'
                                      type='title'
                                      placeholder='title'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>author</Form.Label>
                        <Form.Control name='author' defaultValue={book.author}
                                      id='author'
                                      type='author'
                                      placeholder='author'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>coverPhotoURL</Form.Label>
                        <Form.Control name='coverPhotoURL' defaultValue={book.coverPhotoURL}
                                      id='coverPhotoURL'
                                      type='coverPhotoURL'
                                      placeholder='coverPhotoURL'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>isbnNumber</Form.Label>
                        <Form.Control name='isbnNumber' defaultValue={book.isbnNumber}
                                      id='isbnNumber'
                                      type='isbnNumber'
                                      placeholder='isbnNumber'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>language</Form.Label>
                        <Form.Control name='language' defaultValue={book.language}
                                      id='language'
                                      type='language'
                                      placeholder='language'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>price</Form.Label>
                        <Form.Control name='price' defaultValue={book.price}
                                      id='price'
                                      type='price'
                                      placeholder='price'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </div>
                <div className="card-footer" style={{textAlign: "right"}}>
                    <Button variant="success" type="submit">
                        <FontAwesomeIcon icon={book.id ? faEdit : faSave}/> {book.id ? "Update Book" : "Add New Book"}
                    </Button>
                    <Button variant="info" type="reset">
                        <FontAwesomeIcon icon={faUndo}/> Reset
                    </Button>
                    <Button variant="info" type="button" onClick={() => bookList()}>
                        <FontAwesomeIcon icon={faList}/> Book List
                    </Button>
                </div>
            </Form>


        </div>
    </div>
}
export default Book3