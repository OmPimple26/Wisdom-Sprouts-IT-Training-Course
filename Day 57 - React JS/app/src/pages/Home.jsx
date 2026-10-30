import Tours from "../components/Tours";
import destinations from "../data";

const Home = () => {
  return (
    <div>
      <Tours state={destinations} />
    </div>
  );
};

export default Home;