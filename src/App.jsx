import { useSelector } from 'react-redux'

function App() {
  const { counter } = useSelector( state => state.counter)
  return (
    <>
      <div className="card">
        <button onClick={ () => {}}>
          count is { counter }
        </button>
      </div>

    </>
  )
}

export default App
