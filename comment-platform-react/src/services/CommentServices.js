import axios from "axios";

const GETCOMMENTS_BASE_REST_API_URL = "http://localhost:5000/getComments";

class CommentServices{
    getAllComments(){
        return axios.get(GETCOMMENTS_BASE_REST_API_URL)
    }
} 

export default new CommentServices();