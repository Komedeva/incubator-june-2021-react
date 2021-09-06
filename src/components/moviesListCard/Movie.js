import './../../App.css'
import {Genre} from "../genres/Genre";
import {Genres} from "../genres/Genres";

const Movie = ({movie}) => {

    return (
        <div className="movie">

            <div className='poster'>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=''/>
            </div>

            <div className='movie-info'>
            <h1>{movie.title}</h1>
            {/*<p>Overview: {movie.overview}</p>*/}
            <p>{movie.vote_average}</p>
                <Genres genre_ids ={movie.genre_ids}/>
            </div>
        </div>
    )
}

export {Movie}