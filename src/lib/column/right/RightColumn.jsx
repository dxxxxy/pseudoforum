import RecentPosts from "./sub/RecentPosts.jsx"
import TopicStats from "./sub/TopicStats.jsx"
import UserStats from "./sub/UserStats.jsx"
import { useState, useEffect } from "react"

function RightColumn() {
    const [data, setData] = useState([]);
    const [forumData, setForumData] = useState([]);

    useEffect(() => {
        getUserData()
        getForumData();
    }, [])

    //get and set data
    const getUserData = async() => {
        //users
        const response = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/users-data.php");
        const data = await response.json();
        setData(data.users);
    }

    const getForumData = async() => {
        //forum
        const forumResponse = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php");
        const forumData = await forumResponse.json();
        setForumData(forumData.categories);
    }

    //if it's not ready yet, return loading
    if (!data.length) {
        return <p>Loading...</p>
    }

    // if(!forumData.length){
    //     return <p>Loading...</p>
    // }

    return (
        <div id="right-column">
            <TopicStats data={forumData}/>
            <RecentPosts data={forumData}/>
            <UserStats data={data}/>
        </div>
    )
} 

export default RightColumn