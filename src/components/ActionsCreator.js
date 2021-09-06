import {GET_GENRE, PUT} from "../Actions";

const put=(payload)=>{
    return{type:PUT, payload}
}
const getGenre=(payload)=>{
    return {type:GET_GENRE, payload}
}
export {put, getGenre}
// const starsRating=(payload)=>{
//     return{type:STARS_RATING, payload}
// }