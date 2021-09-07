import {useSelector} from "react-redux";

function Genre({genre_ids}) {
    let genre = useSelector(({genres}) => genres);
    const genresIds = genre_ids.join(',')
    const genresName = genre.filter(value => genresIds.indexOf(value.id) !== 12)
    return (
        <div>
            {
                genresName.map(value => <div>{value.name}</div>)
            }
        </div>
    )
}

export {Genre}