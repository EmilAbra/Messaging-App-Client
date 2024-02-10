import Login from "./Login"
import useLocalStorage from "../hooks/useLocalStorage"
import Dashboard from "./Dashboard"

function App() {
  const [id, setId] = useLocalStorage('id')

  return (
      id ? <Dashboard id={id} /> : <Login onSubmitId={setId} />
  )
}

export default App;
