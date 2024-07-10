import Banner from "../Banner/Banner";
import HelpSection from "../HelpSection/HelpSection";
import Room from "../Room/Room";


const Home = () => {
   return (
      <div className="space-y-8">
         <Banner></Banner>
         <HelpSection></HelpSection>
         <Room></Room>

      </div>
   );
};

export default Home;