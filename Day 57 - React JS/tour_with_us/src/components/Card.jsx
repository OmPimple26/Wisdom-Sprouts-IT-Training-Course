import "./Card.css";

function Card({ image, id, city, description, location, budget, remove }) {
  console.log(remove);

  // console.log(props.remove(),"!@!")

  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img src={image} alt="Taj Mahal" />
        <span className="card-tag">Popular</span>
      </div>

      <div className="card-content">
        <p className="card-location">📍 {location}, India</p>

        <h3>{city}</h3>

        <p className="card-description">{description}</p>

        <div className="card-footer">
          <div className="card-price">
            <span>Starting from</span>
            <h4>
              ₹{budget} <small>/ person</small>
            </h4>
          </div>

          <button
            className="book-btn"
            onClick={() => {
              remove(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
