import React, { useEffect, useState } from 'react';
import useHooks from '../Hooks/Hooks';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Review = () => {
    const [reviews]=useHooks([])
    
    return (
        <div>
              
                {
                 reviews.map(newReview=><ReviewProduct newReview={newReview}></ReviewProduct>)
                } 
        </div>
    );
};

export default Review;