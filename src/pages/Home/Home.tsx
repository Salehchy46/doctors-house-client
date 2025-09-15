import Banner from "./Banner";
import Experts from "./Experts";
import Medicons from "./Medicons";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Medicons></Medicons>
      </div>
      <div>
        <Experts></Experts>
      </div>
    </div>
  );
};

export default Home;