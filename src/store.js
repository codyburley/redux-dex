import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./features/pokemonList/pokemonList";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
  },
})