import gallery1 from "../../../assets/gallery/pexels-diana-2910042-4445175.jpg";
import gallery2 from "../../../assets/gallery/pexels-ella-olsson-572949-1640774.jpg";
import gallery3 from "../../../assets/gallery/pexels-heyho-6186825.jpg";
import gallery4 from "../../../assets/gallery/pexels-michael-block-1691617-3225531.jpg";
import gallery5 from "../../../assets/gallery/pexels-deeanacreates-2565222.png";
import gallery6 from "../../../assets/gallery/pexels-pixabay-164595 (1).jpg";
import "../../../App.css";
const Gallery = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <div className="text-center space-y-5">
            <h1 className="text-5xl font-bold font-classic">Experience Through Images</h1>
            <p className="font-style">
               Let our gallery inspire your next visit, showcasing the essence of relaxation and adventure that awaits you. Take a <br /> visual journey and see why Luxeliving is the perfect choice for your next getaway.
            </p>
         </div>
         <div className="md:grid grid-cols-3 gap-8  p-5">
            <div className="space-y-8">
               <div className=" mx-auto relative overflow-hidden container">
                  <img className="transition-transform duration-[800ms] ease-in-out" src={gallery2} alt="" />
                  <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 transform scale-[1.3] opacity-0 transition-transform duration-[400ms] ease overlay">
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white font-sans">
                        <div className="text-center space-y-3">
                           <h5 className="text-lg text-yellow-500">Service</h5>
                           <h2 className="font-classic text-4xl">Floating Breakfast</h2>
                        </div>
                     </span>
                  </div>
               </div>
               <div className=" my-24 mx-auto relative overflow-hidden container">
                  <img className="transition-transform duration-[800ms] ease-in-out" src={gallery1} alt="" />
                  <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 transform scale-[1.3] opacity-0 transition-transform duration-[400ms] ease overlay">
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white font-sans">
                        <div className="text-center space-y-3">
                           <h5 className="text-lg text-yellow-500">Amenities</h5>
                           <h2 className="font-classic text-4xl">Hotel lake</h2>
                        </div>
                     </span>
                  </div>
               </div>
            </div>
            <div className="space-y-8">
               <div className=" mx-auto relative overflow-hidden container">
                  <img className="transition-transform duration-[800ms] ease-in-out" src={gallery4} alt="" />
                  <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 transform scale-[1.3] opacity-0 transition-transform duration-[400ms] ease overlay">
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white font-sans">
                        <div className="text-center space-y-3">
                           <h5 className="text-lg text-yellow-500">Service</h5>
                           <h2 className="font-classic text-4xl">Private Pool</h2>
                        </div>
                     </span>
                  </div>
               </div>
               <div className=" mx-auto relative overflow-hidden container">
                  <img className="transition-transform duration-[800ms] ease-in-out" src={gallery3} alt="" />
                  <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 transform scale-[1.3] opacity-0 transition-transform duration-[400ms] ease overlay">
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white font-sans">
                        <div className="text-center space-y-3">
                           <h5 className="text-lg text-yellow-500">Amenities </h5>
                           <h2 className="font-classic text-4xl">Bathroom</h2>
                        </div>
                     </span>
                  </div>
               </div>
            </div>
            <div className="space-y-8">
               {/* <img src= alt="" /> */}
               {/* <img className="h-[525px] w-full" src={gallery5} alt="" /> */}
               <div className=" mx-auto relative overflow-hidden container">
                  <img className="transition-transform duration-[800ms] ease-in-out" src={gallery6} alt="" />
                  <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 transform scale-[1.3] opacity-0 transition-transform duration-[400ms] ease overlay">
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white font-sans">
                        <div className="text-center space-y-3">
                           <h5 className="text-lg text-yellow-500">Amenities </h5>
                           <h2 className="font-classic text-4xl">BabRoom</h2>
                        </div>
                     </span>
                  </div>
               </div>
               <div className=" h-[520px] mx-auto relative overflow-hidden container">
                  <img className="transition-transform duration-[800ms] ease-in-out" src={gallery5} alt="" />
                  <div className="absolute bg-black bg-opacity-50 w-full h-full top-0 transform scale-[1.3] opacity-0 transition-transform duration-[400ms] ease overlay">
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-white font-sans">
                        <div className="text-center space-y-3">
                           <h5 className="text-lg text-yellow-500">Service</h5>
                           <h2 className="font-classic text-4xl">Entry exit gate</h2>
                        </div>
                     </span>
                  </div>
               </div>
            </div>
            {/* hover code */}

            {/* <div className="relative mx-auto my-24 w-100 h-100 overflow-hidden transition-transform duration-[800ms] ease">
               <img src={gallery6} alt="Image" className="transition-transform duration-800 ease-in-out " />
               <div className="absolute top-0 w-full h-full bg-red-700 opacity-0 transform scale-130 transition-transform duration-400 ease-in-out hover:opacity-100 hover:scale-100 ">
                  <span className="absolute font-bold text-5xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans transition-transform duration-[800ms] ease">Text</span>
               </div>
            </div> */}

            {/* <div className="w-full h-full flex items-center justify-center bg-orange-500">
               <div className="wrapper flex w-[90%] justify-around">
                  <div className="card w-[280px] h-[360px] rounded-[15px] p-6 bg-white relative flex items-end transition ease-out duration-500 shadow-[0px_7px_10px_rgba(0,0,0,0.5)] hover:translate-y-[-20px]">
                     <div className="absolute top-0 left-0 w-full h-full rounded-[15px] bg-[rgba(0,0,0,0.6)] transition-opacity duration-500 opacity-0 hover:opacity-100"></div>

                     <img className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]" src={gallery1} alt="" />
                     <div className="info relative z-10 text-white opacity-0 transform translate-y-[30px] transition-opacity transform duration-500 hover:opacity-100 hover:translate-y-0">
                        <h1 className="m-0">Card Title</h1>
                        <p className="tracking-wide text-sm mt-2">Card description goes here.</p>
                        <button className="p-2 mt-2 bg-white text-black font-bold rounded hover:bg-blue-500 hover:text-white transition ease duration-500">Button</button>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default Gallery;
