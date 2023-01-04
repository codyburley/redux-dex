import "./App.scss";
import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PokemonPage from "./pages/Pokemon/Pokemon";
import { useGetPokemonByNameQuery } from "./services/pokemonApi";

const App = () => {
  const [page, setPage] = useState(0);
  // Default pull 20 Pokemon at a time
  const [limit, setLimit] = useState(20);
  const { data, isFetching } = useGetPokemonByNameQuery({
    page,
    limit,
  });

  const dataCache = (d) => d?.results ?? [];
  const pokemon = useMemo(() => dataCache(data), [data]);

  // The API will provide entries past 151, maxPoke is to set the max number
  // to 151 (the Kanto Pokedex), threshold is to change from a limit of 20
  // entries per fetch to 11 which will hit the max 151
  const maxPoke = 151;
  const threshold = 140;
  const smallLimit = 11;

  useEffect(() => {
    const fetchMorePokemon = () => {
      if (pokemon.length < maxPoke) {
        if (pokemon.length < threshold) {
          setPage((prev) => prev + 1);
        } else {
          setLimit(smallLimit);
          setPage((prev) => prev + 1);
        }
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
