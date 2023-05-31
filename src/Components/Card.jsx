import React from "react";

const Card = ({name, character}) => {
  return (
      <>
      <div className="card">
          <div>Hola <b>{name}!</b></div>
          <div>Sabemos que tu personaje favorito de la serie es <b>{character}</b></div>
      </div>
      </>
  )
};


export default Card;
