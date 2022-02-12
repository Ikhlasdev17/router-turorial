import React from 'react';

function Footer(props) {
    return (
        <footer className='footer'>
            <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;