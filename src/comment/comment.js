export  function Comment ({comment}){
    return(
        <div>
            <h4><b>Comments:</b>
                {comment.id} {comment.postId} {comment.name}</h4>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}