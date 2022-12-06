import MainColChoiceBox from "./MainColChoiceBox"
import MainColForumBox from "./MainColForumBox"
import { useState, useEffect } from "react"

function MainColumn () {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php")
        const data = await response.json()
        setData(data.categories)
    }

    if (!data.length) {
        return <p>Loading...</p>
    }

    return(
        <div id="main-col-div">
            <MainColChoiceBox data={data}/>
            <MainColForumBox data={data} category={category}/>
        </div>
    )
}

export default MainColumn