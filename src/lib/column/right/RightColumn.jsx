import RecentPosts from "./sub/RecentPosts.jsx"
import TopicStats from "./sub/TopicStats.jsx"
import UserStats from "./sub/UserStats.jsx"
import { useState, useEffect } from "react"

function RightColumn() {
    const [setUserData, setSetUserData] = useState([])
    const [forumData, setForumData] = useState([])

    //get and set data
    useEffect(() => {
        fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/users-data.php")
            .then((response) => response.json())
            .then((data) => {
                setSetUserData(data.users)
            })
            .catch((error) => alert("Could not fetch data from server. Error: " + error))

        fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php")
            .then((response) => response.json())
            .then((data) => {
                setForumData(data.categories)
            })
            .catch((error) => alert("Could not fetch data from server. Error: " + error))
    }, [])

    //if it's not ready yet, return loading
    if (!setUserData.length || !forumData.length) {
        return <p>Loading...</p>
    }

    return (
        <div id="right-column">
            <TopicStats data={forumData} />
            <RecentPosts data={forumData} />
            <UserStats data={setUserData} />
        </div>
    )
} 

export default RightColumn