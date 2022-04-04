
import { useNavigate } from 'react-router-dom';
import Image from '../../../src/GameImage/DreamLeague.png'
import useHooks from '../Hooks/Hooks';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Home.css'
const Home = () => {
    const [reviews]=useHooks([])
    const navigate=useNavigate();
   
    const ShowAllReviews =()=>
    {
        navigate('/review')
    }
    return (
        <div className='container'>
            <div className='row g-4'>
               <div className='col-md-6'>
                 <div className='header'>
                 <h1 className='mb-4'>Dream League Soccer</h1>
                 <h4 className='mb-4'>Best FootBall Game on Play Store</h4>
                 <h4 className='mb-4'>League matches are very interesting </h4>
                 <button className='load-button'>Live Demo</button>
                 </div>
               </div>
               <div className='col-md-6 '>
                 <img className='w-75 mt-3' src={Image} alt=''/>
               </div>
            </div>
            <div>
                <h1 className='mt-3'>Total Reviews (3)</h1> 
            </div>
                <div className='row g-4'>
                {
                 reviews.slice(0,3).map(newReview=><ReviewProduct key={newReview.id} newReview={newReview}></ReviewProduct>)
                } 
                </div>

            <div>
                <button className='review-all-btn' onClick={()=>ShowAllReviews(reviews)}>Review All</button>
            </div>
        </div>
    );
};


export default Home;