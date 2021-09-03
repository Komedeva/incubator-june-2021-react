import {MovieImagesApi} from "../service/MovieService";
import {useSelector} from "react-redux";

const Movie = ({movie}) => {
    const {title, overview, vote_average, poster_path} = movie;

    console.log(movie);

    return (
        <div className="movie">
            <img src={"https://image.tmdb.org/t/p/w300/" + poster_path} alt={title}/>
        </div>
    )
}

export {Movie}