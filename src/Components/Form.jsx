import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [trainer, setTrainer] = useState({
    nombre: "",
    pokemon: "",
  });

  const [err, setErr] = useState(false);

  const handdleSubmit = (event) => {
    event.preventDefault();
    if (trainer.nombre.length >= 3 && trainer.pokemon.length >= 6) {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handdleSubmit}>
        <label>Ingresa tu nombre</label>
        <input
          type="text"
          value={trainer.nombre}
          onChange={(event) =>
            setTrainer({ ...trainer, nombre: event.target.value })
          }
        />
        <label>Ingresa tu pokemon favorito</label>
        <input
          type="text"
          value={trainer.pokemon}
          onChange={(event) =>
            setTrainer({ ...trainer, pokemon: event.target.value })
          }
        />
        <button>Enviar</button>
      </form>

      {err && <p>Por favor chequea que la información sea correcta</p>}

      <Card trainer={trainer} />
    </div>
  );
};

export default Form;
