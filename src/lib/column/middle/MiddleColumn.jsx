import ChoiceBox from "./sub/ChoiceBox.jsx"
import ForumBox from "./sub/ForumBox.jsx"
import { useState, useEffect } from "react"

function MiddleColumn() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    //get and set data
    const getData = async() => {
        const response = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php")
        const data = await response.json()
        setData(data.categories)
    }

    function ChoiceBoxEvent(){
        document.getElementsByTagName("select")[0].addEventListener("change", (e)=>{
            alert(e.target.textContent)
            setData(data.filter(category => category == e.target.textContent))
            console.log(data)
        })
        
    }

    //if it's not ready yet, return loading
    if (!data.length) {
        return <p>Loading...</p>
    }

    return (
        
        <div id="middle-column">
            <ChoiceBox data={data} event={ChoiceBoxEvent}/>
            <ForumBox data={data} category={"1"} topic={"1"}/>
        </div>
    )
}

export default MiddleColumn