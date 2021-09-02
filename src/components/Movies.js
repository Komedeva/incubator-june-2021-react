import {DiscoverMovie} from "../service/MovieService";
import {useEffect, useState} from "react";
import {Movie} from "./Movie";

export function Movies() {
    let [movie, setMovies] = useState([]);
    useEffect(() => {
        DiscoverMovie().then(data => setMovies([...data]));
    }, []);
    return (
        <div>
            {movie.map(movie => <Movie key={movie.id} {...movie}/>)}
        </div>
    );
}

