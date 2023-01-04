import { useState, useEffect } from "react";
import "./Pokedex.scss";
import { useGetPokemonByNameQuery } from "../../services/pokemonApi";
import PokedexEntry from "../PokedexEntry/PokedexEntry";

const Pokedex = () => {
  const [skip, setSkip] = useState(true);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const { data, isFetching, currentData } = useGetPokemonByNameQuery(
    {
      page,
      limit,
    },
    { skip }
  );
  const pokemon = data?.results ?? [];

  if (pokemon) console.log(pokemon);

  useEffect(() => {
    if (pokemon.length < 151) {
      setSkip(false);
    }
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      console.log(data.results.length);
      if (
        data.results.length >= 140 &&
        scrolledToBottom &&
        !isFetching &&
        data.results.length < 151
      ) {
        setLimit(11);
        setPage(page + 1);
      } else if (scrolledToBottom && !isFetching && data.results.length < 151) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <section className="pokedex">
      {pokemon.map((poke, i) => {
        return <PokedexEntry key={i} {...poke} index={i} />;
      })}
    </section>
  );
};

export default Pokedex;
