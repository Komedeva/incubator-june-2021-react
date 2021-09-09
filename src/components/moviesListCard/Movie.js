import './../../App.css'
import {Genre} from "../GenreBadge/Genre";
import {Link, useHistory} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/MoviesInfo";

const Movie = ({movie}) => {
    // console.log(movie)
    // const history = useHistory()
    return (

        <div className="movie">

            <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=''/>
            </div>

            {/*<div>*/}
            {/*    <button onClick={() => {*/}
            {/*        history.push(`/MovieInfo/${movie.id}`)*/}
            {/*    }}> details*/}
            {/*    </button>*/}

            {/*</div>*/}

                <div className='movie-info'>
            <Link className={'link'} to={{pathname:`/MovieInfo/${movie.id}`, state: movie}}>
                    <h2 className='title'>
                        {movie.title} </h2>
            </Link>
            <p className='star-rating'>
                {movie.vote_average}
                <svg className='star' width="34" height="31" viewBox="0 0 34 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765 30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z"
                        fill="#DAC13D"/>
                </svg>
            </p>
            <div className='genrestyle'>
                <Genre genre_ids={movie.genre_ids}/>

                <div className='overview'>
                    <div><h1>Overview:</h1></div>
                    {movie.overview}</div>

            </div>
        </div>
</div>
)
}
export {Movie}