import LoadingPage from "./components/LoadingPage";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import PokemonCards from "./PokemonCards";

function Pokemon() {
  const [pokemon, setpokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [search, setsearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=150";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      setpokemon(detailedResponses);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //search
  const searchdata = pokemon.filter((curpokemon) =>
    curpokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return (
    <div>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search pokemon"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchdata.map((curpokemon) => {
              return (
                <PokemonCards key={curpokemon.id} pokemonData={curpokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Pokemon;
