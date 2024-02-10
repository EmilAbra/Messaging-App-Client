import Login from "./Login"
import useLocalStorage from "../hooks/useLocalStorage"

function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    <>
      <Login onSubmitId={setId} />
    </>
  )
}

export default App;
