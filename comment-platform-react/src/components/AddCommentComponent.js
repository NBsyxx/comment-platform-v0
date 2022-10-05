import React,{useState,preventDefault} from 'react';

function AddCommentComponent(props) {
    
    const [commentContent,setCommentContents] = useState("")
    const [userid, setUserid] = useState("")
    const saveComment = (e) => {
        e.preventDefault();
        const comment = {userid,commentContent}
        console.log(comment)
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text center'> Add Comment</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>
                                        userid 
                                    </label>
                                    <input 
                                    type = "text"
                                    placeholder='Enter a userid'
                                    name = "userid"
                                    className='form-control'
                                    value={userid}
                                    onChange = {(e) => setUserid(e.target.value)}
                                    ></input>
                                    <label className='form-label'>
                                        Comment Contents 
                                    </label>
                                    <input 
                                    type = "text"
                                    placeholder='Enter your comments'
                                    name = "commentContent"
                                    className='form-control'
                                    value={commentContent}
                                    onChange = {(e) => setCommentContents(e.target.value)}
                                    ></input>
                                </div> 
                                <button className='btm btn-success' onClick={(e)=>saveComment(e)}>comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCommentComponent;