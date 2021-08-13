export function Comment({comment, chooseComment}) {

    function onClickShowComment() {
        chooseComment(comment);
    }

    return (
        <div>
            <h4><b>Comments:</b>
                {comment.id} {comment.postId} {comment.name}</h4>
            <button onClick={onClickShowComment}> Show comment details</button>
        </div>
    );
}