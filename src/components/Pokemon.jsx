import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Failed to fetch Pokémon data");
      const data = await res.json();
      const detailedPokemonData = await Promise.all(
        data.results.map(async (curr) => {
          const res = await fetch(curr.url);
          return res.json();
        })
      );
      setPokemon(detailedPokemonData);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curr) =>
    curr.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h1 className="text-white text-2xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-red-500 text-2xl">{error}</h1>;
  }

  return (
    <section className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg">
      <div className="my-4 flex justify-center">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded w-64 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {searchData.map((curr) => (
          <PokemonCard key={curr.id} pokemon={curr} />
        ))}
      </ul>
    </section>
  );
};

export default Pokemon;
