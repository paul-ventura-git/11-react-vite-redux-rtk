import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const { counter } = useSelector( state => state.counter)
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ () => {}}>
          count is { counter }
        </button>
      </div>

    </>
  )
}

export default App
