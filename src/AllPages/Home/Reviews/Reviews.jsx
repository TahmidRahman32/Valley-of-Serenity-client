import { useEffect, useState } from "react";
import Review from "./Review/Review";
// import { Pagination, Autoplay } from "swiper/modules";
// import { Swiper } from "swiper/react";

const Reviews = () => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/reviews")
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setReviews(data);
         });
   }, []);
   return (
      <div className="bg-reviewPic bg-cover bg-center h-96 relative">
         <div className="h-96 bg-[#0f0f1183] ">
            {reviews.map((review) => (
               <Review key={review._id} review={review}></Review>
            ))}{" "}
         </div>
      </div>
   );
};

export default Reviews;
