export  function Comment ({comment}){
    return(
        <div>
            <h1>{comment.id} {comment.postId} {comment.name}</h1>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}
