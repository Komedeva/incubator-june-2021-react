export  function PostDetails ({post}){
    return(
        <div className={post}>
            <h5>{post.id} {post.userId} {post.title}</h5>
            <p>{post.body}</p>
        </div>
    )
}