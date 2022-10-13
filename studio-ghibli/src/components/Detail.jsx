import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/detail.css";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  useEffect(() => {
    fetchItems();
  }, []);
  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
    const item = await data.json();
    setItem(item);
  };
  return (
    <div>
      <div className="movie" id="movie-card">
        <div className="movie__data" id="movie-data">
          <div className="movie__poster">
            <span className="movie__poster--featured">
              <img src={item.image} />
            </span>
          </div>
          <div className="movie__details">
            <h2 className="movie__title">{item.title}</h2>
            <ul className="movie__tags">
              <li className="movie__jpTitle">{item.original_title}</li>
              <li className="movie__rated">{item.rt_score}/100</li>
              <li className="movie__year">{item.release_date}</li>
              <p>
                <strong>Produced by:</strong> {item.producer}
              </p>
              <p>
                <strong>Directed by:</strong> {item.director}
              </p>
            </ul>
            <p className="movie__plot">{item.description}</p>
            <div className="movie__credits">

              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/`}
                >
                  <button id="button">Home</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
