const PokemonCard = ({ pokemon }) => {
  return (
    <li className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-4 shadow-md transition-transform transform hover:scale-105 max-w-xs mx-auto">
      <figure className="flex flex-col items-center">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} sprite`}
          className="w-32 h-32 rounded mb-2"
        />
        <h1 className="mt-2 text-xl font-semibold text-gray-900 capitalize">
          {pokemon.name}
        </h1>
        <div className="text-gray-700 mb-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`bg-${type.type.name}-500 text-white px-2 py-1 rounded-full mr-1`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between w-full mb-4">
          <div className="text-center">
            <p className="font-bold text-gray-800">Height:</p>
            <p className="text-gray-600">{pokemon.height}</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800">Weight:</p>
            <p className="text-gray-600">{pokemon.weight}</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800">Speed:</p>
            <p className="text-gray-600">{pokemon.stats[5].base_stat}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <p className="font-bold text-gray-800">Experience:</p>
            <p className="text-gray-600">{pokemon.base_experience}</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800">Attack:</p>
            <p className="text-gray-600">{pokemon.stats[1].base_stat}</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800">Abilities:</p>
            <p className="text-gray-600">
              {pokemon.abilities.map((curr) => curr.ability.name).join(", ")}
            </p>
          </div>
        </div>
      </figure>
    </li>
  );
};

export default PokemonCard;
