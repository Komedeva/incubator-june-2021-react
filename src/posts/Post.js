export  function Post ({post}){
    return(
        <div className="post">
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}