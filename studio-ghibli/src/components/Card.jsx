import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

function Card({ id, title, image }) {
  return (
    <div className="card">
      <h1 key={id}>
        <Link
          style={{ textDecoration: "none", color: "gray" }}
          to={`detail/${id}`}
        >
          {title}
        </Link>
      </h1>
      <div className="card-img">
        <img src={image} />
      </div>
    </div>
  );
}

export default Card;
