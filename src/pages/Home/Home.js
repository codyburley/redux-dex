import React from "react";
import Pokedex from "../../components/Pokedex/Pokedex";
import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <Header />
      <Pokedex />
    </main>
  );
};

export default Home;
