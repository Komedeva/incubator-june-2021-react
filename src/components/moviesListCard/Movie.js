import './../../App.css'

const Movie = ({movie}) => {
    const {title, overview, vote_average, poster_path} = movie;

    return (
        <div className="movie">

            <div className='poster'>
            <img src={"https://image.tmdb.org/t/p/w300/" + poster_path} alt={title}/>
            </div>

            <div className='movie-info'>
            <h1>{movie.title}</h1>
            {/*<p>Overview: {movie.overview}</p>*/}
            <p>{movie.vote_average}</p>
            </div>
        </div>
    )
}

export {Movie}