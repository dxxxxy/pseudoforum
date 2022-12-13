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
                        data.map(item => {
                            let fullArray = new Array();
                            for(let i = 0; i < item.topicList.length; i++){
                                for(let j = 0; j < item.topicList[i].listPosts.length; j++){
                                    //return
                                    fullArray.push( 
                                    (<tr>
                                        <td>{item.topicList[i].listPosts[j].author}</td>
                                        <td>{item.topicList[i].listPosts[j].date}</td>
                                        <td>{item.topicList[i].listPosts[j].rate}</td>
                                    </tr>));
                                }
                            }
                            return fullArray;
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )//
}

export default RecentPosts