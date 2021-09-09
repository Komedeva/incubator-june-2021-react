import {useSelector} from "react-redux";
import {useEffect} from "react";
import {MovieInfoService} from './MovieInfoService'
import {Genre} from "../GenreBadge/Genre";
import ReactStars from "react-rating-stars-component";
import {MovieInfoStyle} from './MovieInfoStyle.css'


export function MoviesInfo(props) {
    const movieInfo = useSelector(({movieInfo}) => movieInfo);
    const {location: {state}} = props;

    useEffect(() => {
        MovieInfoService().then(value => console.log(value));
    }, []);

    return (
        <div>
            {movieInfo && movieInfo.map(movie => <MoviesInfo key={state.id} movie={state}/>)}

            <div className='MovieInfo'>
                <div className='background'>
                    <div className='MoviesInfoImg'>
                        <img src={`https://image.tmdb.org/t/p/w300/${state.poster_path}`} alt=''/>
                    </div>
                </div>
                <h1>{state.title}</h1>

                    Rated: {state.vote_average}
                    <p><h1>Vote count:</h1> {state.vote_count}</p>
                    <p>Please vote here:
                <div className='star-rating2'>
                        <ReactStars>
                            count={state.vote_average}
                            size={20}
                            color='#DAC13D'
                        </ReactStars>
                </div>
                    </p>

                <p>Original language: {state.original_language}</p>

                <span>Genre: <p className='genrestyle2'><Genre genre_ids={state.genre_ids}/></p>
                </span>

                <p><h1>Popularity:</h1> {state.popularity}</p>
                <p><h1>Release date:</h1> {state.release_date}</p>
                <p className='over'><h1>Overview:</h1> {state.overview}</p>

            </div>
        </div>
    )
        ;
}
