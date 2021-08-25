export function PostDetails(props) {
    console.log(props)
    let {location:{state}}= props;
    return (
        <div>
                <h3> {state.id} - {state.userId}</h3>
                <p>Title: {state.title} </p>
                <p>{state.body} </p>
        </div>
    )
}