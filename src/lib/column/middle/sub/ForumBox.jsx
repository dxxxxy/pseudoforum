import { CgData } from "react-icons/cg";
import {FaThumbsUp, FaThumbsDown, FaTrash} from "react-icons/fa";
import {useState, useEffect} from 'react'


function ForumBox(props) {//category is the index of the category, topic is the index of the topic
    const [category, setCategory] = useState()
    const [topic, setTopic] = useState()

    console.log(data)
    return (
        <fieldset id="forum-box">
            <legend>Forum Posts</legend>

                        {/* <div id="forum-item" key={postCount}>
                            <div id="top-of-item">
                                <p>{post.text}</p>  
                                <p>likes: {post.like}</p>
                            </div>
                            <p>by:{post.author}    2022-11-10 12:10    replies:{post.replies}</p>
                        </div> */}


            {
                Array.from({length: 5}, (v, i) => {
                    return (<div id="forum-item">
                        <div id="item-header">
                            <p>Post Title</p>
                            <div>
                                <FaThumbsUp id="icon" /><p>8</p><FaThumbsDown id="icon" />
                            </div>
                        </div>
                        <div id="item-footer">
                            <p>by: dxxxxy</p>
                            <p>2022-11-10 12:10</p>
                            <p>Replies: 776</p>
                            <FaTrash id="icon" />
                        </div>
                    </div>)
                })
            }
        </fieldset>
    )
}

export default ForumBox