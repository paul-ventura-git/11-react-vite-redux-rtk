import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './slices/counter';

function App() {
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
    <h1>Counter: {counter}</h1>
        <button onClick={ () => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementByAmount(123) )}>
          Increment by 123
        </button>
    </>
  )
}

export default App
