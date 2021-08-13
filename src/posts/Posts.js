import {Post} from "../post/Post";
import {useState} from "react";im
import
let [Posts, setPosts]= useState(null);

<div className={'posts'}>
    {
        posts && posts.map(value =>
            <Post
                key={value.id}
                post={value}/>
        )
    }
</div>