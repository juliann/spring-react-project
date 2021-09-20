import React, {useState} from "react";

import {useInput} from "../hooks/input-hook";
import {Button} from "react-bootstrap";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IBookData from "../types/book.type";
import http from "../hooks/http-common";
import {MyToast} from "./MyToast";


// book: BookType
const Book = () => {

    const {value: title, bind: bindTitle, reset: resetTitle} = useInput('');
    const {value: author, bind: bindAuthor, reset: resetAuthor} = useInput('');
    const {value: url, bind: bindURL, reset: resetURL} = useInput('');
    const {value: isbnNumber, bind: bindISBN, reset: resetISBN} = useInput('');
    const {value: price, bind: bindPrice, reset: resetPrice} = useInput('');
    const {value: language, bind: bindLanguage, reset: resetLanguage} = useInput('');

    const [showToast, setShowToast] = useState(false);
    const book: IBookData = {
        author: author,
        title: title,
        coverPhotoURL: url,
        isbnNumber: isbnNumber,
        language: language,
        price: price
    }
    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        alert(`Submitting Name ${title} ${author}${isbnNumber}${price}${language}`);
        http.post("", book).then(response => {
            if (response.data != null) {
                alert("book saved")
                setShowToast(true)
                setTimeout(() => setShowToast(false), 3000)
            }
        })
        resetTitle();
        resetAuthor();
        resetURL();
        resetISBN();
        resetPrice();
        resetLanguage();
    }

    return <div>
        <div style={{"display": showToast ? "block" : "none"}}><MyToast></MyToast></div>

        <div className="card" style={{width: "30rem"}}>
            <h5 className=" card-title">Add New Book</h5>
            <div className=" card-body">
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" {...bindTitle} />
                    </label>
                    <label>
                        Author:
                        <input type="text" {...bindAuthor} />
                    </label>
                    <label>
                        Picture URL:
                        <input type="text" {...bindURL} />
                    </label>
                    <label>
                        ISBN:
                        <input type="text" {...bindISBN} />
                    </label>
                    <label>
                        Price:
                        <input type="text" {...bindPrice} />
                    </label>
                    <label>
                        Language:
                        <input type="text" {...bindLanguage} />
                    </label>
                    <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave}/></Button>
                </form>

            </div>
        </div>
    </div>
}


export default Book;