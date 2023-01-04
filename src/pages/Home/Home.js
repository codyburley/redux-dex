import React from "react";
import Pokedex from "../../components/Pokedex/Pokedex";
import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = ({ pokemon }) => {
  return (
    <main className="home">
      <Header />
      <Pokedex pokemon={pokemon} />
    </main>
  );
};

export default Home;
