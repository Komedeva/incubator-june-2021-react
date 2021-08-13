export  function Post ({post}){
    return(
        <div>
            <h5>{post.id} {post.userId} {post.title}</h5>
            <p>{post.body}</p>
        </div>
    )
}