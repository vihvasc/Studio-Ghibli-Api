import React from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import "../css/searchbox.css";

function FilmCards() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/films");
    const items = await data.json();
    setItems(items);
    setFilteredItems(items);
  };
  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let filteredList = items.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filteredList);
  };

  return (
    <>
      <SearchBox searchChange={handleChange} />
      <div className="container">
        {filteredItems.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default FilmCards;
