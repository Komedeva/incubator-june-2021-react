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

// import {useDispatch, useSelector} from "react-redux";
// import {getStars} from "../../index";
// import {useEffect} from "react";
// import {DiscoverMovie} from "../../service/MovieService";
// import Star from "./Star";
//
// export default function StarsRating(){
//     const stars = useSelector(({getStars})=> getStars.results.vote_average);
//     const dispatch = useDispatch();
//     console.log(stars);
//
//     useEffect(()=>{
//         DiscoverMovie().then(({data})=>dispatch(getStars(data)))
//     }, []);
//     return(
//         <div className='stars'>
//             {stars && stars.map(star =><Star key={star.id} star={star}/>)}
//         </div>
//     )
// }