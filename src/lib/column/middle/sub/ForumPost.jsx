import {FaThumbsDown, FaThumbsUp, FaTrash} from "react-icons/fa";
import {useState} from "react";

function ForumPost({post, deletePost}) {
    const [likes, setLikes] = useState(post.like);

    return (
        <div id="forum-item">
            <div id="item-header">
                <p>{post.text}</p>
                <div>
                    <FaThumbsUp id="icon" onClick={() => setLikes(likes + 1)} /><p>{likes}</p><FaThumbsDown id="icon" onClick={() => setLikes(likes - 1)} />
                </div>
            </div>
            <div id="item-footer">
                <p>by: {post.author}</p>
                <p>{post.date}</p>
                <p>Replies: {post.replies}</p>
                <FaTrash id="icon" onClick={() => {
                    deletePost(post.id);
                }} />
            </div>
        </div>
    )
}

export default ForumPost