import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://pokeapi.co/api/v2';

const initialState = {
  pokemon: [],
  seen: 0,
  caught: 0,
  isLoading: true
}

export const getPokemonList = createAsyncThunk('pokemonList/getPokemonList', () => {
  return fetch(`${url}/pokemon?limit=151`)
    .then(response => response.json())
    .catch(error => console.log(error))
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