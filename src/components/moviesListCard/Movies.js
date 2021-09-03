import {DiscoverMovie} from "../../service/MovieService";
import {useEffect, useState} from "react";
import {Movie} from "./Movie";
import './../../App.css'
import {useDispatch, useSelector} from "react-redux";
import {putMoviesPages} from "../../index";

export function Movies() {
    const movies = useSelector(({moviesPages}) => moviesPages.results);
    const dispatch = useDispatch();
    console.log(movies);

    useEffect(() => {
        DiscoverMovie().then(({data}) => dispatch(putMoviesPages(data)));
    }, []);

    return (
        <div className='movieContainer'>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}

