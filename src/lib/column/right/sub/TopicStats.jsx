function TopicStats({data}) {
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
                        Array.from({length: 10}, (v, i) => {
                            return (<tr>
                                <td>topic_title</td>
                                <td>nberPost</td>
                                <td>status</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default TopicStats