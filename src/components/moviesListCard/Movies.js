import {DiscoverMovie} from "../../service/MovieService";
import {useEffect, useState} from "react";
import {Movie} from "./Movie";
import './../../App.css'

export function Movies() {
    let [movie, setMovies] = useState([]);

    useEffect(() => {
        DiscoverMovie().then(({data}) => setMovies([...data.results]));
    }, []);

    return (
        <div className='movieContainer'>
            {movie.length>0 && movie.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}

