import { useEffect, useState } from "react";
import Review from "./Review/Review";
import axios from "axios";
// import { Pagination, Autoplay } from "swiper/modules";
// import { Swiper } from "swiper/react";

const Reviews = () => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:5000/reviews").then((data) => {
         console.log(data.data);
         setReviews(data.data);
      });
   }, []);
   return (
      <div className="">
         <div className="text-center text-3xl my-8 font-bold font-classic">
            <h2>User Reviews</h2>
         </div>
         <div className=" ">
            <div className={reviews.length > 1 && "grid grid-cols-3 py-2 gap-8 justify-center "}>
               {reviews.map((review) => (
                  <Review key={review._id} review={review}></Review>
               ))}{" "}
            </div>
         </div>
      </div>
   );
};

export default Reviews;
