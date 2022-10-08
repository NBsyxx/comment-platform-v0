// stateless function component
import React from 'react';
import {Link} from 'react-router-dom';

AddCommentBottonComponent.propTypes = {
    
};

function AddCommentBottonComponent(props) {
    return (
        <div className='container'>
            <header>
                <Link to="/add-comment" className='btn btn-primary mb-2'>Add Comment</Link>
            </header>
            
        </div>
    );
}

export default AddCommentBottonComponent;