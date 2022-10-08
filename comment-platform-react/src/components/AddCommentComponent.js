import React,{Component,useState} from 'react';
import CommentServices from '../services/CommentServices';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";


class AddCommentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            commentContent:"",
            userid:"",
            ip:'',
        }

        this.changeCommentContentHandler = this.changeCommentContentHandler.bind(this);
        this.changeUseridHandler = this.changeUseridHandler.bind(this);
        this.saveComment = this.saveComment.bind(this)
    }

    saveComment = async (e) =>{

        const res = await axios.get('https://geolocation-db.com/json/')
        this.state.ip = res.data.IPv4;
        e.preventDefault();
        let comment = {userid:this.state.userid, commentContent:this.state.commentContent, ip:this.state.ip};
        console.log("comment =>" + JSON.stringify(comment));

        CommentServices.addComments(comment).then(res=>{
            window.location.reload(false);
        });

    }
    changeCommentContentHandler = (event) => {
        this.setState({commentContent:event.target.value})
    }
    changeUseridHandler = (event) => {
        this.setState({userid:event.target.value})
    }
    



    render(){
        return (
            <div>
                <div className='container'>
                        <div className='card mb-3'>
                            <div className='card-body mb-3'>
                            <h5 className="card-title mb-3">Add your comment</h5>
                                <form>
                                    <div className='form-group'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Userid" name = "userid" value={this.state.userid} aria-label="Username" aria-describedby="basic-addon1" onChange = {this.changeUseridHandler}></input>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <textarea
                                            type = "text"
                                            placeholder='Enter your comments'
                                            name = "commentContent"
                                            className='form-control'
                                            value={this.state.commentContent}
                                            onChange = {this.changeCommentContentHandler}
                                        ></textarea>
                                    </div> 
                                    <div className='mt-3 '>
                                        <div className='btn btn-primary ' onClick={this.saveComment}>comment</div>
                                        <Link to="/" className='btn btn-danger'>Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

// function AddCommentComponent(props) {
    
//     const [commentContent,setCommentContents] = useState("")
//     const [userid, setUserid] = useState("")
//     const saveComment = (e) => {
//         e.preventDefault();
//         const comment = {userid,commentContent};
//         console.log(JSON.stringify(comment));
//         CommentServices.addComments(comment); 
//     }
//     const navigate = useNavigate();
//     navigate("/", { replace: true });

//     return (
//         <div>
//             <div className='container'>
//                     <div className='card mb-3'>
//                         <div className='card-body mb-3'>
//                         <h5 class="card-title">Add your comment</h5>
//                             <form>
//                                 <div className='form-group'>
//                                     <div class="input-group mb-3">
//                                         <div class="input-group-prepend">
//                                             <span class="input-group-text" id="basic-addon1">@</span>
//                                         </div>
//                                         <input type="text" class="form-control" placeholder="Userid" name = "userid" value={userid} aria-label="Username" aria-describedby="basic-addon1" onChange = {(e) => setUserid(e.target.value)}></input>
//                                     </div>
//                                 </div>

//                                 <div className='form-group'>
//                                     <textarea
//                                         type = "text"
//                                         placeholder='Enter your comments'
//                                         name = "commentContent"
//                                         className='form-control'
//                                         value={commentContent}
//                                         onChange = {(e) => setCommentContents(e.target.value)}
//                                     ></textarea>
//                                 </div> 
//                                 <div className='mt-3'>
//                                     <button className='btn btn-primary' onClick={(e)=>saveComment(e)}>comment</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     );
// }

export default AddCommentComponent;