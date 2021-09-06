import {GetGenres} from "./GenresService";
import {useSelector, useDispatch} from "react-redux";
import {getGenres} from "../../index";
import {useEffect} from "react";
import {Genre} from "./Genre";

 function Genres() {
    const genres = useSelector(({getGenres})=> getGenres.results);
    const dispatch = (useDispatch)();
    console.log("jckjxazoxjczojxjx");

    useEffect(()=> {
        GetGenres().then(({data})=>dispatch(getGenres(data)));
    },[]);
    return(
        <div className='genres'>
            {genres && genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
}

export {Genres};