import Pokemon from "./components/Pokemon";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Pokédex
      </h1>
      <Pokemon />
    </div>
  );
};

export default App;
