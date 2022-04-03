import React, { useEffect, useState } from 'react';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Review = () => {
    const [reviews,setReviews]=useState([])
    const [showAll, setAll]=useState(false)
    useEffect(()=>{
        fetch('GameReviewData.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
              
                {
                 reviews.map(newReview=><ReviewProduct newReview={newReview}></ReviewProduct>)
                } 
        </div>
    );
};

export default Review;