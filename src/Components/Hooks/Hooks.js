import { useEffect, useState } from "react";

const useHooks =()=>
{  
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('GameReviewData.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return [reviews,setReviews]
}
export default useHooks;