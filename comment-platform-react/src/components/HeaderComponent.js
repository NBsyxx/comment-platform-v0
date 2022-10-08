// stateless function component
import React from 'react';

HeaderComponent.propTypes = {
    
};

function HeaderComponent(props) {
    return (
        <div>
            <header>
                <nav className='navbar navbar-light bg-light justify-content-center'>
                    <a href = "http://localhost:3000" className='navbar-brand' >
                        Comment Platform
                    </a>
                </nav>
            </header>
            
        </div>
    );
}

export default HeaderComponent;
