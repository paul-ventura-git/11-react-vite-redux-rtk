import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./slices/pokemon";

export const PokeApp = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPokemons());
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <hr></hr>
      <ul>
        <li>Poke</li>
        <li>Poke</li>
        <li>Poke</li>
      </ul>
    </>
  )
}
