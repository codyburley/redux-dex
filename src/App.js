import "./App.scss";
import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PokemonPage from "./pages/Pokemon/Pokemon";
import { useGetPokemonByNameQuery } from "./services/pokemonApi";

// The API will provide entries past 151, maxPoke is to control the max number
// of entries (the Kanto Pokedex being 151 entries)
const maxPoke = 151;
// Number of entries per page
export const pageSize = 20;

const App = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(pageSize);
  const { data, isFetching } = useGetPokemonByNameQuery({
    page,
    limit,
  });

  const dataCache = (d) => d?.results ?? [];
  const pokemon = useMemo(() => dataCache(data), [data]);

  useEffect(() => {
    const fetchMorePokemon = () => {
      if (pokemon.length < maxPoke) {
        // Calculation to pull remaining 11 Pokemon to hit 151 exactly
        if (pokemon.length + pageSize > maxPoke) {
          setLimit(maxPoke - pokemon.length);
        }
        setPage((prev) => prev + 1);
      }
    };

    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - window.outerHeight / 3;

      if (scrolledToBottom && !isFetching) {
        fetchMorePokemon();
      }
    };

    if (pokemon.length < maxPoke) {
      document.addEventListener("scroll", onScroll);
    } else {
      document.removeEventListener("scroll", onScroll);
    }

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isFetching, pokemon, page]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage pokemon={pokemon} />} />
        <Route path="/pokemon/:entry_number" element={<PokemonPage />} />
      </Routes>
    </div>
  );
};

export default App;
