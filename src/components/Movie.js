import {MovieImagesApi} from "../service/MovieService";

const Movie = ({title, overview, vote_average, poster_path}) => {
    return (
        <div className="movie">
            <h1> Hello movie</h1>
            <img src={MovieImagesApi + poster_path} alt={title}/>
        </div>
    )
}
export {Movie}