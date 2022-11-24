import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from './features/pokemonList/pokemonList';
import { useEffect } from 'react';
import Home from './pages/Home/Home';

const App = () => {
  const { pokemon, isLoading } = useSelector(state => state.pokemonList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList());
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  console.log(pokemon)

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
