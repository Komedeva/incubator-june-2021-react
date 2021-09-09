import {DiscoverMovie} from "./service/MovieService";
import {useEffect} from "react";
import {Movie} from "./Movie";
import './../../App.css'
import {useDispatch, useSelector} from "react-redux";
import {GetGenres} from "../GenreBadge/GenresService";
import {getGenre, put} from "../ActionCreatorRedux/ActionsCreator";
import {Genre} from "../GenreBadge/Genre";

export function Movies() {
    const movies = useSelector(({moviesPages}) => moviesPages);
    const dispatch = useDispatch();

    useEffect(() => {
        DiscoverMovie().then(value => dispatch(put(value.data.results)));
        GetGenres().then(value => dispatch(getGenre(value.genres)))
    }, []);

    return (
        <div className='movieContainer'>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
}

