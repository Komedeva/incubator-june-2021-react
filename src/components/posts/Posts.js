import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import {Post} from "../post/Post";

export default function Posts (){
    const [posts, setPosts] = useState();
    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, [])
    return(
        <div>
            {posts && posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    )
}