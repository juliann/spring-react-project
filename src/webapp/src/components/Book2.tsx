import IBookData from "../types/book.type";

import {useForm} from "../hooks/UseForm";
import React from "react";
import http from "../hooks/http-common";

const Book2 = () => {
    const initialState: IBookData = {
        id: "",
        title: "",
        author: "",
        coverPhotoURL: "",
        isbnNumber: "",
        language: "",
        price: ""
    }

    const {onChange, onSubmit, values} = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        console.log("test")
        let response: IBookData = await http.post("", values);
        console.log(response)
    }

    return (
        // don't mind this ugly form :P
        <div>
            <div className="card" style={{width: "30rem"}}>
                <h5 className=" card-title">Add New Book</h5>
                <div className=" card-body">
                    <h1>hi</h1>
                </div>
            </div>
            <h1>hello</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        name='title'
                        id='title'
                        type='title'
                        placeholder='title'
                        onChange={onChange}
                        required
                    />

                    <input
                        name='author'
                        id='author'
                        type='author'
                        placeholder='author'
                        onChange={onChange}
                        required
                    />
                    <input
                        name='coverPhotoURL'
                        id='coverPhotoURL'
                        type='coverPhotoURL'
                        placeholder='coverPhotoURL'
                        onChange={onChange}
                        required
                    />
                    <input
                        name='isbnNumber'
                        id='isbnNumber'
                        type='isbnNumber'
                        placeholder='isbnNumber'
                        onChange={onChange}
                        required
                    />
                    <input
                        name='language'
                        id='language'
                        type='language'
                        placeholder='language'
                        onChange={onChange}
                        required
                    />
                    <input
                        name='price'
                        id='price'
                        type='price'
                        placeholder='price'
                        onChange={onChange}
                        required
                    />
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );

}

export default Book2;

