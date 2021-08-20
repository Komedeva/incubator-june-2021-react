import {Link} from "react-router-dom";

function Post({post}){
    return(
        <div>
            <span> {post.title}</span> - <Link to={`/posts/${post.id}`}> Post details</Link>
        </div>
    );
}

export {Post}