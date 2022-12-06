function MainColForumBox ({data, category}) {
    console.log(data)
    return(
        <div id="main-col-forum-box">
            {
                category.map((topicList) => {
                    for(let topicCount = 0; topicCount < category.nberTopics; topicCount++){
                        for(let postCount = 0; postCount < category.topicList[topicCount].nberPost; postCount++){
                            let post = category.topicList[topicCount].listPosts[postCount];
                            return (
                                <div id="forum-item">
                                    <div id="top-of-item">
                                        <p>{post.text}</p>  
                                        <p>likes: {post.like}</p>
                                    </div>
                                    <p>by:{post.author}    2022-11-10 12:10    replies:{post.replies}</p>
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}

export default MainColForumBox