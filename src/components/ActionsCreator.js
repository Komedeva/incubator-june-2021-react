import {GET_GENRE, PUT} from "../Actions";

const put=(payload)=>{
    return{type:PUT, payload}
}
const getGenre=(payload)=>{
    return {type:GET_GENRE, payload}
}
export {put, getGenre}
