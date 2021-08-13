import {Post} from "../post/Post";
import {PostDetails} from "../post/Post.details";
import {useEffect, useState} from "react";
import {getPosts} from '../service/PostService';
import '../post/style.css'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    const choosePost = (itemPost) => {
        setPost(itemPost);
    };

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'posts'}>
            <div>
            {posts && posts.map(value => <Post key={value.id} post={value} choosePost={choosePost}/>)}
            </div>
            {
                post && <div>
                    <PostDetails post={post}/>
                </div>
            }
        </div>
)
}