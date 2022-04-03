import React from 'react';

const ReviewProduct = (props) => {
    const {name}=props.newReview;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ReviewProduct;