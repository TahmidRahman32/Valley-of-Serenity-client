import gallery1 from "../../../assets/gallery/pexels-diana-2910042-4445175.jpg";
import gallery2 from "../../../assets/gallery/pexels-ella-olsson-572949-1640774.jpg";
import gallery3 from "../../../assets/gallery/pexels-heyho-6186825.jpg";
import gallery4 from "../../../assets/gallery/pexels-michael-block-1691617-3225531.jpg";
import gallery5 from "../../../assets/gallery/pexels-deeanacreates-2565222.png";
import gallery6 from "../../../assets/gallery/pexels-pixabay-164595 (1).jpg";

const Gallery = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <div className="text-center space-y-5">
            <h1 className="text-5xl font-bold font-classic">Experience Through Images</h1>
            <p className="font-style">
               Let our gallery inspire your next visit, showcasing the essence of relaxation and adventure that awaits you. Take a <br /> visual journey and see why Luxeliving is the perfect choice for your next getaway.
            </p>
         </div>
         <div className="grid grid-cols-3 gap-8  p-5">
            <div className="space-y-8">
               <div className="hover:rounded-md  hover:bg-gradient-to-r hover:from-[#01091380] to-[#20215130]">
                  <img className="hover:bg-gradient-to-r hover:from-[#01091380] to-[#20215130]" src={gallery2} alt="" />
               </div>
               <img src={gallery1} alt="" />
            </div>
            <div className="space-y-8">
               <img src={gallery4} alt="" />
               <img src={gallery3} alt="" />
            </div>
            <div className="space-y-8">
               <img src={gallery6} alt="" />
               <img className="h-[525px] w-full" src={gallery5} alt="" />
            </div>
            {/* hover code */}

            <div className="w-full h-full flex items-center justify-center bg-orange-500">
               <div className="wrapper flex w-[90%] justify-around">
                  <div className="card w-[280px] h-[360px] rounded-[15px] p-6 bg-white relative flex items-end transition ease-out duration-500 shadow-[0px_7px_10px_rgba(0,0,0,0.5)] hover:translate-y-[-20px]">
                     <div className="absolute top-0 left-0 w-full h-full rounded-[15px] bg-[rgba(0,0,0,0.6)] transition-opacity duration-500 opacity-0 hover:opacity-100">fddd</div>

                     <img className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]" src={gallery1} alt="" />
                     <div className="info relative z-10 text-white opacity-0 transform translate-y-[30px] transition-opacity transform duration-500 hover:opacity-100 hover:translate-y-0">
                        <h1 className="m-0">Card Title</h1>
                        <p className="tracking-wide text-sm mt-2">Card description goes here.</p>
                        <button className="p-2 mt-2 bg-white text-black font-bold rounded hover:bg-blue-500 hover:text-white transition ease duration-500">Button</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gallery;
