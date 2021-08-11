function getUsers() {
return fetch('https://jsonplaceholder.typicode.com/users')
    .then(value=> value.json());
}

function getUser(id){
return fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(value=> value.json());
}
// todo hendle request
// https://jsonplaceholder.typicode.com/users/1/posts

const getPostsOfUser=(userId)=>{
   return  axiosInstance.get(`/${userId}/posts`)
}
export {getUsers, getUser, getPostsOfUser};
