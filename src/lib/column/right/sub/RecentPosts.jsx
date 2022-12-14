function RecentPosts({data}) {
    //creating a topic stats object with data
    let arrayOfPosts = new Array();
    //categories
    for(let i = 0; i < data.length; i++){
        //topicList
        for(let j = 0; j < data[i].topicList.length; j++){
            //listPosts
            for(let k = 0; k < data[i].topicList[j].listPosts.length; k++){
                arrayOfPosts.push(data[i].topicList[j].listPosts[k]);
            }
        }
    }
    //sorting array
    arrayOfPosts.sort((a, b) => (a.date < b.date) ? 1 : -1);
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
                        arrayOfPosts.map(item => {
                            return (<tr>
                                <td>{item.author}</td>
                                <td>{item.date}</td>
                                <td>{item.rate}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default RecentPosts