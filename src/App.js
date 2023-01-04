import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "./features/pokemonList/pokemonListSlice";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PokemonPage from "./pages/Pokemon/Pokemon";
import { useGetPokemonByNameQuery } from "./services/pokemonApi";

const App = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const { data, isFetching, currentData } = useGetPokemonByNameQuery({
    page,
    limit,
  });

  const pokemon = data?.results ?? [];

  if (pokemon) console.log(pokemon);

  useEffect(() => {
    const fetchMorePokemon = () => {
      if (pokemon.length < 151) {
        if (pokemon.length < 140) {
          setPage(page + 1);
        } else {
          setLimit(11);
          setPage(page + 1);
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

    if (pokemon.length < 151) {
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
