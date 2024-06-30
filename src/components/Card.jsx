import React from "react";

export default function Card({ img, name, specie, type, gender }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top p-2 rounded-5" src={img} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text"> <b>Name:</b> {name}</p>
          <p className="card-text"><b>Specie:</b> {specie}</p>
          <p className="card-text"><b>Type:</b> {type}</p>
          <p className="card-text"><b>Gender:</b> {gender}</p>
        </div>
      </div>
    </>
  );
}
