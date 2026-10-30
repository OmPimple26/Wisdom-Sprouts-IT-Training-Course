import Card from "./Card";

const Tours = ({ state }) => {
  return (
    <div className="tours-container">

      <h1 className="main-heading">
        Plan with Us 🌞
      </h1>

      <section className="tours-grid" id="tours">

        {state.map((destination) => (
          <Card
            key={destination.id}
            destination={destination}
          />
        ))}

      </section>

    </div>
  );
};

export default Tours;
