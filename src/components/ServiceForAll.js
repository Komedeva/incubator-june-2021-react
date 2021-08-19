// users
function usersPage (){
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((value) => value.json())
}


function userPage (id){
    return fetch('https://jsonplaceholder.typicode.com/users'+ id)
        .then(value => value.json())
}

// posts
function postsPage (){
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((value) => value.json())
}

function postPage (id){
    return fetch("https://jsonplaceholder.typicode.com/posts" + id)
        .then(value => value.json())
}



// comments
function commentsPage (){
    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then((value) => value.json())
}

function commentPage (id){
    return fetch("https://jsonplaceholder.typicode.com/comments" + id)
        .then(value => value.json())
}

export {userPage, usersPage, postPage, postsPage, commentPage, commentsPage}

