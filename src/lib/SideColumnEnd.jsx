import SideColEndRecent from "./SideColEndRecent"
import SideColEndTopicStats from "./SideColEndTopicStats"
import SideColEndUserStats from "./SideColEndUserStats"
import { useState, useEffect } from "react"

function SideColumnEnd() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/users-data.php")
        const data = await response.json()
        setData(data.users)
    }

    if (!data.length) {
        return <p>Loading...</p>
    }

    return(
        <div id="side-col-end-div">
            <SideColEndTopicStats data={data}/>
            <SideColEndRecent data={data}/>
            <SideColEndUserStats data={data}/>
        </div>
    )
} 

export default SideColumnEnd