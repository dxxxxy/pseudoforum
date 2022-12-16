function RecentPosts({ data }) {
    //get all posts
    const arrayOfPosts = data.flatMap(category => category.topicList.flatMap(topic => topic.listPosts))

    //sorting array
    arrayOfPosts.sort((a, b) => b.date - a.date);

    return (
        <fieldset id="recent-posts">
            <legend>Recent Posts</legend>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Date</td>
                        <td>Rate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayOfPosts.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.author}</td>
                                    <td>{item.date}</td>
                                    <td>{item.rate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default RecentPosts