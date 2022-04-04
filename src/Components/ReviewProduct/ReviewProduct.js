import React from 'react';
import './ReviewProduct.css'
const ReviewProduct = (props) => {
    const {name,review,ratings}=props.newReview;
    return (
        <div className='col-md-4 mt-5'>
           <div className='game-review-demo shadow-lg'>
           <h4>{name}</h4>
            <h6>{review}</h6>
            <h6>{ratings}</h6>
           </div>
        </div>
    );
};

export default ReviewProduct;