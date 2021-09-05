// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {DiscoverMovie} from "../../service/MovieService";
// import {putMoviesPages} from "../../index";
// import {Movie} from "../moviesListCard/Movie";
//
// export function Movies() {
//     const movies = useSelector(({moviesPages}) => moviesPages.results);
//     const dispatch = useDispatch();
//     console.log(movies);
//
//     useEffect(() => {
//         DiscoverMovie().then(({data}) => dispatch(putMoviesPages(data)));
//     }, []);
//
//     return (
//         <div className='movieContainer'>
//             {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
//         </div>
//     );
// }

import {GetGenres} from "./GenresService";
import {useSelector} from "react-redux";

export function Genres() {
    const genres = useSelector()
})
GetGenres