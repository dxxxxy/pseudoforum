import Main from './lib/Main.jsx'
import { useEffect } from "react"

function App() {
  useEffect(() => {
    console.log("hi")
  }, [])

  return (
    <main>
      <Main.Header  />
      <Main.Body/>
      <Main.Footer/>
    </main>
  )
}

export default App