function postsPage (){
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((value) => value.json())
}

function postPage (id){
    return fetch("https://jsonplaceholder.typicode.com/posts" + id)
        .then(value => value.json())
}
export {postsPage, postPage}