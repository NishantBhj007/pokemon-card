import "./index.css";

function PokemonCards({ pokemonData }) {
  return (
    <div>
      <li className="pokemon-card">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </figure>
        <h1 className="pokemon-name">{pokemonData.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {pokemonData.types.map((curtype) => curtype.type.name).join(",")}
          </p>
        </div>

        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span>Height: </span>
            {pokemonData.height}
          </p>

          <p className="pokemon-info">
            <span>Weight: </span>
            {pokemonData.weight}
          </p>

          <p className="pokemon-info">
            <span>Speed: </span>
            {pokemonData.stats[5].base_stat}
          </p>
        </div>
      </li>
    </div>
  );
}

export default PokemonCards;
