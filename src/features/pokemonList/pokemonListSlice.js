import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: [],
};

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    toggleCaught: (state, { payload }) => {
      const pokemonCaught = state.pokemon.find(
        (poke) => poke === payload.entryNumber
      );
      if (pokemonCaught) {
        const index = state.pokemon.indexOf(pokemonCaught);
        if (index > -1) {
          state.pokemon.splice(index, 1);
        }
      } else {
        state.pokemon.push(payload.entryNumber);
      }
    },
  },
  extraReducers: {},
});

export const { toggleCaught } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
