import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HelpSection from "../HelpSection/HelpSection";
import Room from "../Room/Room";
import Reviews from "../Reviews/Reviews";


const Home = () => {
   return (
      <div className="space-y-8">
         <Helmet>
            <title>Valley of Serenity Home</title>
         </Helmet>
         <Banner></Banner>
         <HelpSection></HelpSection>
         <Room></Room>
         <Gallery></Gallery>
         <Reviews></Reviews>
      </div>
   );
};

export default Home;