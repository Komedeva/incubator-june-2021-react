import {useEffect, useState} from "react";
import {postsPage} from "../components/ServiceForAll";
import {Post} from "./Post";

export function Posts () {
    let [posts, setPosts]= useState([]);

    useEffect(() => {
        postsPage().then(value => setPosts([...value]));
    }, []);
    return(
    <div>
        {posts.map(value => <Post key={value.id} post={value}/>)}
    </div>
        );
}