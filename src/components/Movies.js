import {DiscoverMovie} from "../service/MovieService";
import {useEffect, useState} from "react";
import {Movie} from "./Movie";

export function Movies () {
let [movie, setMovies]= useState([]);
    useEffect(() => {
        DiscoverMovie().then(value => setMovies([...value]));
    }, []);
    return(
    <div>
        {movie.map(value => <Movie key={value.id} post={value}/>)}
    </div>
        );
}