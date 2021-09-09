import {GET_GENRE, PUT, GET_ONE_MOVIE} from "./Actions";

const put=(payload)=>{
    return{type:PUT, payload}
}
const getGenre=(payload)=>{
    return {type: GET_GENRE, payload}
}

const getOneMovie=(payload)=>{
    return {type: GET_ONE_MOVIE, payload}
}
export {put, getGenre, getOneMovie}
