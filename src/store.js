import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./features/pokemonList/pokemonListSlice";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
  },
})