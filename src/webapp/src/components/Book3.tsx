import {Button, Form} from "react-bootstrap";
import IBookData from "../types/book.type";
import {useForm} from "../hooks/UseForm";
import http from "../hooks/http-common";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {MyToast} from "./MyToast";

const Book3 = () => {
    const initialState: IBookData = {
        id: "",
        title: "",
        author: "",
        coverPhotoURL: "",
        isbnNumber: "",
        language: "",
        price: ""
    }
    const [showToast, setShowToast] = useState(false);
    const {onChange, onSubmit, values} = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        console.log("test")
        let response: IBookData = await http.post("", values);
        console.log(response)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
    }

    return <div>
        <div style={{"display": showToast ? "block" : "none"}}>
            <MyToast message={"  Book saved successfully"} buttonType={"success"}/>
        </div>

        <div className="card" style={{width: "30rem"}}>
            <h5 className=" card-title">Add New Book</h5>
            <div className=" card-body">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name='title'
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
                        <Form.Control name='author'
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
                        <Form.Control name='coverPhotoURL'
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
                        <Form.Control name='isbnNumber'
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
                        <Form.Control name='language'
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
                        <Form.Control name='price'
                                      id='price'
                                      type='price'
                                      placeholder='price'
                                      onChange={onChange}
                                      required/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <FontAwesomeIcon icon={faSave}/>
                    </Button>
                </Form>

            </div>
        </div>
    </div>
}
export default Book3