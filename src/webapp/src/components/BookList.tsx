import http from "../hooks/http-common";
import IBookData from "../types/book.type";
import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {MyToast} from "./MyToast";
import {Link, useLocation, useParams} from "react-router-dom";

const BookList = () => {

    const params: string = useParams();
    const location = useLocation()
    console.log("param:" + params)
    console.log("location:" + location)


    const defaultBooks: IBookData[] = [];

    const [books, setBooks]: [IBookData[], (posts: IBookData[]) => void] = useState(defaultBooks);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");
    const [reload, setReload] = useState(true)
    const [showToast, setShowToast] = useState(false);

    // useEffect(() => {
    //     console.log("In useeff")
    //
    //     http.get<IBookData[]>("").then(value => {
    //         setBooks(value.data);
    //         setLoading(false);
    //     })
    //     //reload when deleteBook function ran
    // }, [reload])

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await http.get<IBookData[]>("")

            setBooks(response.data)
        }
        fetchBooks()
    }, [reload])

    function deleteBook(bookId: string | null | undefined) {
        console.log("In deletebook")
        http.delete("" + bookId).then(value => {
            if (value.data != null) {
                setShowToast(true)
                setReload(!reload)
                setTimeout(() => setShowToast(false), 3000)
            }
        })
    };

    return <div>
        <div style={{"display": showToast ? "block" : "none"}}>
            <MyToast message={"  Book deleted successfully"} buttonType={"danger"}/>
        </div>
        <div className="card" style={{width: "35rem"}}>

            <div className=" card-body">
                <h5 className=" card-title">Book List</h5>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">ISBN</th>
                        <th scope="col">Price</th>
                        <th scope="col">Language</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.length === 0 ?
                        <tr>
                            <td id="stupidrow"> No Books Available</td>
                        </tr> :
                        books.map((value) => (<tr key={value.id}>

                                <td><Image
                                    src={value.coverPhotoURL}
                                    roundedCircle width="25" height="25"/>{value.title}</td>
                                <td>{value.author}</td>
                                <td>{value.isbnNumber}</td>
                                <td>{value.price}</td>
                                <td>{value.language}</td>
                                <td><ButtonGroup>
                                    <Link to={"/edit/" + value.id}
                                          className="btn btn-sm btn-outline-primary"><FontAwesomeIcon
                                        icon={faEdit}/></Link>
                                    <Button size="sm" variant="outline-danger"
                                            onClick={() => deleteBook(value.id)}><FontAwesomeIcon
                                        icon={faTrash}/>
                                    </Button>
                                </ButtonGroup>
                                </td>

                            </tr>
                        ))
                    }

                    </tbody>
                </table>
                <a href="/add" className=" btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>


}
export default BookList;