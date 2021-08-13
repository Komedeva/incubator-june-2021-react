const url='https://jsonplaceholder.typicode.com/comments';

const getComments = () => {
    return fetch(url)
        .then(value => value.json());

}

const getComment = (id)=>{
    return fetch (url + '/' + id + '/comments')
        .then(value => value.json());
}
export {getComment, getComments}