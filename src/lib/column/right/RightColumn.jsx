import RecentPosts from "./sub/RecentPosts.jsx"
import TopicStats from "./sub/TopicStats.jsx"
import UserStats from "./sub/UserStats.jsx"
import { useState, useEffect } from "react"

function RightColumn() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    //get and set data
    const getData = async() => {
        const response = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/users-data.php")
        const data = await response.json()
        setData(data.users)
    }

    //if it's not ready yet, return loading
    if (!data.length) {
        return <p>Loading...</p>
    }

    return (
        <div id="right-column">
            <TopicStats data={data}/>
            <RecentPosts data={data}/>
            <UserStats data={data}/>
        </div>
    )
} 

export default RightColumn