import Login from "./Login";
import { useState } from 'react'

function App() {
  const [id, setId] = useState()
  return (
    <>
      <Login onSubmitId={setId} />
    </>
  )
}

export default App;