import ChoiceBox from "./sub/ChoiceBox.jsx"
import ForumBox from "./sub/ForumBox.jsx"
import { useState, useEffect } from "react"

function MiddleColumn({filter}) {
    const [data, setData] = useState([])
    const [category, setCategory] = useState(0)
    const [topic, setTopic] = useState(0)

    //get and set data
    useEffect(() => {
        fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php")
            .then((response) => response.json())
            .then((data) => {
                setData(data.categories)
            })
            .catch((error) => alert("Could not fetch data from server. Error: " + error))
    }, [])

    //if it's not ready yet, return loading
    if (!data.length) {
        return (
            <div id="middle-column">
                <p>Loading...</p>
            </div>
        )
    }

    //if there's a filter, filter the posts
    if (filter) {
        const filtered = data[category].topicList[topic].listPosts.filter((post) => {
            return post.text.toLowerCase().includes(filter.toLowerCase()) || post.author.toLowerCase().includes(filter.toLowerCase())
        })

        return (
            <div id="middle-column">
                <ChoiceBox data={data} category={category} setCategory={setCategory} setTopic={setTopic} />
                <ForumBox posts={filtered} />
            </div>
        )
    }

    function deletePost(id) {
        const newData = [...data]
        newData[category].topicList[topic].listPosts = data[category].topicList[topic].listPosts.filter((post) => post.id !== id)
        setData(newData)
    }

    return (
        <div id="middle-column">
            <ChoiceBox data={data} category={category} setCategory={setCategory} setTopic={setTopic} />
            <ForumBox posts={data[category].topicList[topic].listPosts} deletePost={deletePost} />
        </div>
    )
}

export default MiddleColumn