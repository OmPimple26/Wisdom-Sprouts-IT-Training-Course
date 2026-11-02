import Card from "./Card";
import "./Tours.css";

function Tours({ state, remove }) {
  return (
    <div className="wrapper">
      <h2>Welcome To TourWorld</h2>

      <section id="tours">
        {state.map(function (item) {
          return <Card key={item.id} {...item} remove={remove} />;
        })}
      </section>
    </div>
  );
}

export default Tours;
