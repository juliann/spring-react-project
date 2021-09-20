import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/rest/books",
    headers: {
        "Content-type": "application/json"
    }
});