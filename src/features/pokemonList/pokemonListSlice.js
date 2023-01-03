import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonCaught: [],
};

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    toggleCaught: (state, { payload }) => {
      const pokemonCaught = state.pokemonCaught.find(
        (poke) => poke === payload.entryNumber
      );
      if (pokemonCaught) {
        const index = state.pokemonCaught.indexOf(pokemonCaught);
        if (index > -1) {
          state.pokemonCaught.splice(index, 1);
        }
      } else {
        state.pokemonCaught.push(payload.entryNumber);
      }
    },
  },
  extraReducers: {},
});

export const { toggleCaught } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
