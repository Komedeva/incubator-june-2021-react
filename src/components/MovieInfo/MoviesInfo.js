import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MovieInfoService} from './MovieInfoService'
import {movieInfo} from './MovieInfo'
import {Movie} from "../moviesListCard/Movie";
import {getOneMovie} from "../ActionsCreator";

export function MoviesInfo(props) {
    const movieInfo = useSelector(({movieInfo}) => movieInfo);
    const dispatch = useDispatch();
    const {location: { state }}  = props;

    console.log(state.id);

    useEffect(() => {
        MovieInfoService().then(value => console.log(value));
    }, []);

    return (
        <div>
            {movieInfo && movieInfo.map(movie => <MoviesInfo key={state.id} movie={state}/>)}
        </div>
    );
}
