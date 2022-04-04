import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './ReviewProduct.css'
const ReviewProduct = (props) => {
    const {name,review,ratings}=props.newReview;
    return (
        <div className='col-md-4 mt-5'>
           <div className='game-review-demo shadow-lg'>
           <h4>{name}</h4>
            <h6>{review}</h6>
            <div className='rating-class'>
            <Rating  initialRating={ratings} emptySymbol={<FontAwesomeIcon icon={faStar}/>} fullSymbol={<FontAwesomeIcon style={{color:'goldenrod'}} icon={faStar}/>}
            readonly
            >
            </Rating>
            <h6 className='mt-1'>{ratings}</h6>
            </div>
           </div>
        </div>
    );
};

export default ReviewProduct;