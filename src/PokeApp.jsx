import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices/pokemon";

export const PokeApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );

  useEffect(()=>{
    dispatch(getPokemons());
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <hr></hr>
      <span>Loading: {isLoading ? 'True' : 'False'}</span>
      <ul>
        {
          pokemons.map( ({ name }) => (
            <li key={ name }>{ name }</li>
          ))
        }
      </ul>
      <button 
        onClick={ () => dispatch(getPokemons(page)) } 
        disabled={isLoading}
      >
        Next Page
      </button>
    </>
  )
}
