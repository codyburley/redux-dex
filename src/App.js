import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from './features/pokemonList/pokemonListSlice';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

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

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
