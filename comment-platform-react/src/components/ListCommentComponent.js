// functional component that lists all the current comments related to the page 
import React, { useEffect, useInsertionEffect, useState,className } from 'react';
import CommentServices from '../services/CommentServices';
import {Link} from 'react-router-dom';

const ListCommentComponent = () => {
    
    const [comments, setComments] = useState([])

    useEffect(()=>{

        CommentServices.getAllComments().then(
            (response) => {
                setComments(response.data);
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    },[])

    return (
        <div className='container'>
            <div className='card mb-3'>
            <iframe width="1080px" height="768px" src="http://localhost:8080/?target=http%3A%2F%2Fgithub.com"></iframe>
            </div>
            <Link to="/add-comment" className='btn btn-primary mb-2'>Add Comment</Link>
                <div>
                    {
                        comments.map(
                        comment =>
                        <div className='card mb-3'>
                            <div className='card-body'>
                                <div className="col-xl-11">
                                    <div className="row">
                                        <p><strong>userId {comment.userId}</strong><span className="mx-2 color-me">{comment.date}</span></p>
                                     
                                    </div> 
                                    <p> {comment.content}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
        </div>
    );
}

export default ListCommentComponent;