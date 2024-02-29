import React from "react";

const Card = ({trainer}) => {
const {nombre, pokemon} = trainer

  return <div>Hola {nombre}, tu pokemon favorito es {pokemon}</div>;
};

export default Card;
