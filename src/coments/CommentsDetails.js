export function CommentsDetails({comment, chooseComment}) {
    return (
        <div>
            <h4><b>Comments:</b>
                {comment.id} {comment.postId} {comment.name}</h4>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
}