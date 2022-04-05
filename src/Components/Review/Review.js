
import useHooks from '../Hooks/Hooks';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Review = () => {
    const [reviews]=useHooks([])
    
    return (
        <div className='container'>
               <h1>What People say?</h1>
               <div className='row g-4'>
               {
                 reviews.map(newReview=><ReviewProduct key={newReview.id} newReview={newReview}></ReviewProduct>)
                } 
               </div>

        </div>
    );
};

export default Review;