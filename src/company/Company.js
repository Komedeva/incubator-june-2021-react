
export function Company (props) {
    let {name, catchPhrase, bs}= props.company;
    return(
        <div>
            <h4>Company:</h4>
            <p>name:{name}</p>
            <p>catchPhrase:{catchPhrase}</p>
            <p>bs:{bs}</p>
        </div>
    );
}