function ChoiceBox({ data, category, setCategory, setTopic }) {
    return (
        <fieldset id="choice-box">
            <legend>Filter Posts</legend>
            <form>
                <div>
                    <label htmlFor="firstSelect">Choose Category</label>
                    <select name="firstSelect" onChange={(e) =>
                    {
                        setCategory(e.target.value)
                        setTopic(0) //reset, to first, because category 2 does not have topic 1
                    }}>
                        {
                            data.map((cat, index) => {
                                return (<option key={index} value={index}>{cat.name}</option>)
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="secondSelect">Choose Topic</label>
                    <select name="secondSelect" onChange={(e) => setTopic(e.target.value)}>
                        {
                            data[category].topicList.map((topic, index) => {
                                return (<option key={index} value={index}>{topic.topic_title}</option>)
                            })
                        }
                    </select>
                </div>
            </form>
        </fieldset>
    )
}

export default ChoiceBox