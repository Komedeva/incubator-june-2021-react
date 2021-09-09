import {useDispatch, useSelector} from "react-redux";
import {Genre} from "./Genre";
import {useEffect} from "react";
import {getGenre} from "../ActionCreatorRedux/ActionsCreator";
import {GetGenres} from "./GenresService";

function Genres({genre_ids}) {
    const genres = useSelector(({genres}) => genres);
    const dispatch = useDispatch();

    useEffect(() => {
        GetGenres().then(value => dispatch(getGenre(value.genres)))
    }, []);
    return (
        <div className='genres'>
            {genres && genres.map(genres=><Genre key={genres.id}/>)}
        </div>
    );
}

export {Genres};
