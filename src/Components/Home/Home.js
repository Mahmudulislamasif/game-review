import React, { useEffect, useState } from 'react';
import Image from '../../../src/GameImage/DreamLeague.png'
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Home.css'
const Home = () => {
    const [reviews,setReviews]=useState([])
    const [showAll, setAll]=useState(false)
    useEffect(()=>{
        fetch('GameReviewData.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    const ShowAllReviews =()=>
    {
        setAll(true)

    }
    return (
        <div className='container'>
            <div className='row g-4'>
               <div className='col-md-6'>
                 <div className='header'>
                 <h1>Best Football App</h1>
                 <h5>This is one of the best Football App I played </h5>
                 </div>
                 <div>
                     <button className='load-button'>Button</button>
                 </div>
               </div>
               <div className='col-md-6 '>
                 <img className='w-50' src={Image} alt=''/>
               </div>
            </div>
            <div>
                <h1>Total Reviews</h1> 
            </div>
                {
                   showAll && reviews.slice(0,3).map(newReview=><ReviewProduct newReview={newReview}></ReviewProduct>)
                } 
            <div>
                <button onClick={()=>ShowAllReviews(reviews)}>Review All</button>
            </div>
        </div>
    );
};


export default Home;