import {Link} from "react-router-dom";

function Post({post}) {
    return (
        <div>
            <span> {post.title}</span> -
            <Link to={{pathname: `/postsPage/${post.id}`, state: post}}> Post
            details</Link>
        </div>
    );
}

export {Post}