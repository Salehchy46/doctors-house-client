import Banner from "./Banner";
import Experts from "./Experts";
import Medicons from "./Medicons";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="bg-teal-950">
        <Banner></Banner>
      </div>
      <div className="bg-white">
        <Services></Services>
      </div>
      <div className="bg-white">
        <Medicons></Medicons>
      </div>
      <div className="bg-white">
        <Experts></Experts>
      </div>
      <div className="bg-white">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;