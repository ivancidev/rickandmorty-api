import React from "react";
import "./style/card.css";
import useFetchGet from "./hooks/useFetch";
import Card from "./components/Card";

const URL = import.meta.env.VITE_URL_RICKMORT;
export default function App() {
  const { data, loading, error } = useFetchGet(URL);
  console.log(data);
  return (
    <>
      <h1>Rick and Morty</h1>
      <section className="sectionCard">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          data.results.map((element) => (
            <Card
              key={element.id}
              img={element.image}
              name={element.name}
              specie={element.species}
              type={element.type}
              gender={element.gender}
            />
          ))
        )}
      </section>
    </>
  );
}
