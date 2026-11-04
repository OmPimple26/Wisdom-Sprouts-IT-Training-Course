import { useState } from "react";
import "./Card.css";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ id, image, name, description, price, removeItem }) => {
  const [state, setState] = useState(false);

  const desc = state ? description : description.slice(0, 70) + "...";

  return (
    <div className="food-card" key={id} style={{ margin: "1rem" }}>
      <div className="food-image">
        <img src={image} alt={name} />
        <span className="food-badge">Popular</span>
      </div>

      <div className="food-content">
        <h3>{name}</h3>
        <p>
          {desc}

          {state ? (
            <span
              style={{ color: "red" }}
              onClick={() => {
                setState(false);
              }}
            >
              {" "}
              see less
            </span>
          ) : (
            <span
              style={{ color: "blue" }}
              onClick={() => {
                setState(true);
              }}
            >
              see more
            </span>
          )}
        </p>

        <div className="food-footer">
          <span className="food-price">₹{price}</span>

          <button
            className="cart-btn"
            style={{ background: "red" }}
            onClick={() => {
              removeItem(id);
            }}
          >
            <MdDeleteOutline size={17} />
          </button>

          <button className="cart-btn">+ Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
