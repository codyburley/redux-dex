import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

const initialState = {
  pokemon: [],
  caught: false,
  isLoading: true
}

export const getPokemonList = createAsyncThunk('pokemonList/getPokemonList', () => {
  // return fetch(`${url}/pokemon?limit=151`)
  //   .then(response => response.json())
  //   .catch(error => console.log(error))
  return P.getPokedexByName("kanto")
    .then((response) => {
      console.log(response);
      return response.pokemon_entries;
    })
    .catch((error) => {
      console.log('There was an ERROR: ', error);
    });
})

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemonList.pending]: (state) => {
      state.isLoading = true;
    },
    [getPokemonList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pokemon = action.payload;
    },
    [getPokemonList.rejected]: (state) => {
      state.isLoading = false;
    }
  }
})

export const { } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;