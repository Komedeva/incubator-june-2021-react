function postsPage() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((value) => value.json())
}

function postPage(id) {
    return fetch("https://jsonplaceholder.typicode.com/posts" + id)
        .then(value => value.json())
}

function usersPage() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((value) => value.json())
}

function userPage(id) {
    return fetch("https://jsonplaceholder.typicode.com/users" + id)
        .then(value => value.json())
}

const getUser = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/users" + id)
        .then(value => value.json())
}
export {postPage, postsPage, userPage, usersPage, getUser}