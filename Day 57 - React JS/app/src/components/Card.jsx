import { useState } from "react";

const Card = ({ destination }) => {
  const [readMore, setReadMore] = useState(false);

  const { image, city, description, budget } = destination;

  return (
    <article className="tour-card">

      <img
        src={image}
        alt={city}
        className="tour-image"
      />

      <div className="card-content">

        <h2>{city}</h2>

        <p className="tour-description">
          {readMore
            ? description
            : `${description.substring(0, 85)}...`}

          <button
            className="read-more"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </p>

        <p className="tour-budget">
          ₹{budget}
        </p>

      </div>

    </article>
  );
};

export default Card;
