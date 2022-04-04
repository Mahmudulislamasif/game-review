import React from 'react';
import Emoji from '../../GameImage/angry-and-sad-emoji-115495132213jxf0zx4az.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='style-error'>
            <img src={Emoji} alt=''/>
            <h1>404</h1>
            <h1>This Page is not Available</h1>
        </div>
    );
};

export default NotFound;