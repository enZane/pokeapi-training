import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${index}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, [index]);

  return (
    <div>
      <div className="p-12 bg-slate-400 text-3xl">
        {pokemons.map((pokemon: any) => {
          return <p key={pokemon.name}>{pokemon.name}</p>;
        })}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIndex(index + 1)}
      >
        Click me {index}
      </button>
    </div>
  );
}

export default App;
