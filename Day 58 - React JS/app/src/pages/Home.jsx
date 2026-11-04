import Card from "../components/Card";

const Home = ({ state, removeItem }) => {
  return (
    <div className="wrapper">
      <h4>Choose your food...</h4>

      <section id="card_wrapper">
        {state.map((a) => {
          console.log(a);
          return <Card {...a} removeItem={removeItem} />;
        })}
      </section>
    </div>
  );
};

export default Home;
