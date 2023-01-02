import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "./features/pokemonList/pokemonListSlice";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PokemonPage from "./pages/Pokemon/Pokemon";

const App = () => {
  const { isLoading } = useSelector((state) => state.pokemonList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:entry_number" element={<PokemonPage />} />
      </Routes>
    </div>
  );
};

export default App;
