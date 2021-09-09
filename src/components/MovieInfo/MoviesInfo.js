import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MovieInfoService} from './MovieInfoService'
import {movieInfo} from './MovieInfo'
import {Movie} from "../moviesListCard/Movie";
import {getOneMovie} from "../ActionsCreator";
export function MoviesInfo() {
    const movieInfo = useSelector(({movieInfo}) => movieInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        MovieInfoService().then(value => dispatch(getOneMovie(value.data.results)));
    }, []);
    return (
        <div>
            {movieInfo && movieInfo.map(movie => <MoviesInfo key={movie.id} movie={movie}/>)}
        </div>
    );
}
