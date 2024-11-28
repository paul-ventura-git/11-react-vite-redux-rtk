import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slices/counter';

function App() {
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
        <button onClick={ () => dispatch( increment() )}>
          count is { counter }
        </button>
    </>
  )
}

export default App
