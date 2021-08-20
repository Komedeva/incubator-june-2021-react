import {useEffect, useState} from "react";
import {postsPage} from '../service/PostAPI'
import {Post} from '../components/Post'

export default function Posts () {
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
