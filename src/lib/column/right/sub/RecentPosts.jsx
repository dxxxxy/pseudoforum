function RecentPosts({data}) {
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
                        Array.from({length: 10}, (v, i) => {
                            return (<tr>
                                <td>author</td>
                                <td>date</td>
                                <td>rate</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default RecentPosts