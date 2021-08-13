import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../service/post.service";
import {Comment} from "../comment/comment";

export  function Post ({post}){

    const [comments, setComments] = useState();
    useEffect(() => {
        getCommentsOfPost(post.id).then(value => setComments([...value]))
    }, [])

    return(
        <div>
            <h3> <b>Posts:</b>
                {post.id} {post.userId} {post.title}</h3>
            <p>{post.body}</p>
            <div>
                {
                    comments && comments.map(value => <Comment comment={value} key={value.id}/>)
                }
            </div>
        </div>
    )
}