export  function Comment ({comment}){
    return(
        <div className={'comment'}>
            <h3>{comment.id} {comment.postId} {comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
}