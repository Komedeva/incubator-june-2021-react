import './../../App.css'
import {Genres} from "../GenreBadge/Genres";
import {Genre} from "../GenreBadge/Genre";

const Movie = ({movie}) => {
// const Change (e)=>{
//     onclick()
//     }
    const OpenNewPage(e){

    }
    return (
        <div className="movie" onClick= OpenNewPage()>

            <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=''/>
            </div>

            <div className='movie-info'>
                <h2 className='title'>{movie.title}</h2>
                <p className='star-rating'>
                    {movie.vote_average}
                    <svg className='star' width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765 30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill="#DAC13D"/>
                    </svg>
                </p>
                <div className='genrestyle'>
                    <Genre genre_ids={movie.genre_ids}/>
                </div>
            </div>
        </div>
    )
}
export {Movie}