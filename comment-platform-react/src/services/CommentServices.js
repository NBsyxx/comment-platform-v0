import axios from "axios";

const GETCOMMENTS_BASE_REST_API_URL = "http://localhost:5000/";

class CommentServices{
    getAllComments(){
        return axios.get(GETCOMMENTS_BASE_REST_API_URL + "getComments")
    }
    addComments(comment){
        console.log("posting to server")
        return axios.post(GETCOMMENTS_BASE_REST_API_URL + "addComments", comment)
    }
} 


export default new CommentServices();