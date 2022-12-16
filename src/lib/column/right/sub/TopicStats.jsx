function TopicStats({ data }) {
    //get all topics
    const arrayOfTopics = data.flatMap(category => category.topicList)

    //sorting array
    arrayOfTopics.sort((a, b) => b.nberPost - a.nberPost)

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
                        arrayOfTopics.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.topic_title}</td>
                                    <td>{item.nberPost}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default TopicStats