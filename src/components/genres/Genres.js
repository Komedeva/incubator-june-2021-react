import {useSelector} from "react-redux";
import {Genre} from "./Genre";

 function Genres({genre_ids}) {
    const genres = useSelector(({genres}) => genres);
     // console.log(genres)

    return(
        <div className='genres'>
            {
               genres.map(genre=> <Genre key={genre.id} genre_ids={genre_ids}/>)
            }
        </div>
    );
}

export {Genres};