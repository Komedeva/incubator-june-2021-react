import {useEffect, useState} from "react";
import {getPosts} from "../service/PostAPI";
import {Post} from "./../components/Post"

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(async ()=>{
        let responce = await getPosts();
        setPosts([...responce]);
    }, [])

    return (
        <div>
            {posts.map(value =><Post item= {value} key={value.id}/>)}
        </div>
    );
}
