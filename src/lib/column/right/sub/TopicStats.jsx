function TopicStats({data}) {
    //creating a topic stats object with data
    let arrayOfTopics = new Array();
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].topicList.length; j++){
            arrayOfTopics.push(data[i].topicList[j]);
        }
    }
    //sorting array
    arrayOfTopics.sort((a, b) => (a.nberPost < b.nberPost) ? 1 : -1);
    return (
        <fieldset id="topic-stats">
            <legend>Topic Stats</legend>
            <table>
                <thead>
                    <tr>
                        <td>Topic Title</td>
                        <td># of Posts</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayOfTopics.map(item => {
                            return (<tr>
                                <td>{item.topic_title}</td>
                                <td>{item.nberPost}</td>
                                <td>{item.status}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default TopicStats