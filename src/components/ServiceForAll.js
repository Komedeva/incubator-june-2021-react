function usersPage (){
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((value) => value.json())
}


function userPage (id){
    return fetch('https://jsonplaceholder.typicode.com/users'+ id)
        .then(value => value.json())
}

export {userPage, usersPage}

