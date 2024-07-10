import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HelpSection from "../HelpSection/HelpSection";
import Room from "../Room/Room";


const Home = () => {
   return (
      <div className="space-y-8">
         <Banner></Banner>
         <HelpSection></HelpSection>
         <Room></Room>
         <Gallery></Gallery>

      </div>
   );
};

export default Home;