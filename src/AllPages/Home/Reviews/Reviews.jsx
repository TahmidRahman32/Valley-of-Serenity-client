// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Review from "./Review/Review";
import { ClipLoader } from "react-spinners";
// import axios from "axios";
// import { Pagination, Autoplay } from "swiper/modules";
// import { Swiper } from "swiper/react";

const Reviews = () => {
   const {
      isPending,
      isError,
      error,
      data: reviews,
   } = useQuery({
      queryKey: ["reviews"],
      queryFn: async () => {
         const res = await fetch("https://assignment-11-server-delta-ruddy.vercel.app/reviews");
         return res.json();
      },
   });

   // const [reviews, setReviews] = useState([]);

   // useEffect(() => {
   //    axios.get("https://assignment-11-server-delta-ruddy.vercel.app/reviews").then((data) => {
   //     
   //       setReviews(data.data);
   //    });
   // }, []);

   if (isPending) {
      return (
         <div className="text-center">
            <ClipLoader />
         </div>
      );
   }

   if (isError) {
      return (
         <div className="text-center">
            <p>{error.message}</p>
         </div>
      );
   }
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
