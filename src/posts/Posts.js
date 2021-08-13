import {Post} from "../post/Post";
import {useState} from "react";
import {getPosts} from '../service/PostService';
import {getPost} from '../service/PostService';

let [Posts, setPosts]= useState(null);

<div className={'posts'}>
    {posts && posts.map(value =>
            <Post
                key={value.id}
                post={value}/>
        )
    }
</div>