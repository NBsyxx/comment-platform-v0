// stateless function component
import React from 'react';
import PropTypes from 'prop-types';

HeaderComponent.propTypes = {
    
};

function HeaderComponent(props) {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <a href = "http://bettercallsong.com" className='nacbar-brand'>
                        Comment Platform
                    </a>
                </nav>
            </header>
            
        </div>
    );
}

export default HeaderComponent;
