import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getOneMovie} from "../ActionsCreator";
import {useSelector} from "react-redux";
import * as path from "path";


export function MovieInfo({state}) {
    console.log(state)
    const movie = useSelector(({movieInfo}) => movieInfo);
    const dispatch = useDispatch();
    return (
        <div className='movieContainer'>
            {/*{movie.title}*/}
            {/*//     {movie && movie.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}
        </div>
    );
}
