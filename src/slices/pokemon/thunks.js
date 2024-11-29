import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( ) => {
  return async ( dispatch ) => {
    dispatch( startLoadingPokemons() );
    dispatch( setPokemons())
  }
}