export function Post({post, choosePost}) {

    function onClickShowPost() {
        choosePost(post);
    }

    return (
        <div>
            <h5>{post.id} {post.title}</h5>

            <button onClick={onClickShowPost}> Show post details</button>
        </div>
    );
}