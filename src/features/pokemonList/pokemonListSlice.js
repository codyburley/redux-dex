import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

const initialState = {
  pokemon: [],
  isLoading: true
}

export const getPokemonList = createAsyncThunk('pokemonList/getPokemonList', () => {
  return P.getPokedexByName("kanto")
    .then((response) => {
      return response.pokemon_entries;
    })
    .catch((error) => {
      console.log('There was an ERROR: ', error);
    });
})

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    caughtPoke: (state, { payload }) => {
      const pokemonCaught = state.pokemon.find(poke => poke.entry_number === payload.entry_number);
      pokemonCaught.caught = true;
    },
    uncaughtPoke: (state, { payload }) => {
      const pokemonCaught = state.pokemon.find(poke => poke.entry_number === payload.entry_number)
      pokemonCaught.caught = false;
    }
  },
  extraReducers: {
    [getPokemonList.pending]: (state) => {
      state.isLoading = true;
    },
    [getPokemonList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pokemon = action.payload;
      state.pokemon.forEach(poke => {
        poke.caught = false;
      })
    },
    [getPokemonList.rejected]: (state) => {
      state.isLoading = false;
    }
  }
})

export const { caughtPoke, uncaughtPoke } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;