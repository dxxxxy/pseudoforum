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
    console.log(arrayOfTopics);
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
                        function createTopicData(){
                            let fullHTML = new Array();
                            for(let i = 0; i < arrayOfTopics.length; i++){
                                console.log(arrayOfTopics[i].topic_title);
                                fullHTML.push(
                                    (<tr>
                                        <td>{arrayOfTopics[i].topic_title}</td>
                                        <td>{arrayOfTopics[i].nberPost}</td>
                                        <td>{arrayOfTopics[i].status}</td>
                                    </tr>));
                            }
                            return fullHTML;
                        }
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default TopicStats