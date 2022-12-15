import { Header, Body, Footer } from "./lib/Main.jsx"
import { useState } from "react"

function App() {
    const [filter, setFilter] = useState("")

    return (
        <main>
            <Header setFilter={setFilter} />
            <Body filter={filter} />
            <Footer />
        </main>
    )
}

export default App