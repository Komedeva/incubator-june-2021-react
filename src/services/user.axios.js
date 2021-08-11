
let config={
    baseURL:'https://jsonplaceholder.typicode.com/users';
};

let axiosIntance= axios.create(config);

const getUsers=()=>{return axiosIntance.get();};
const getUser =(id) => {...}
todo
