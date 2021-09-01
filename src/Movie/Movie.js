const Movie = (props)=>{
    return(
        <div>
           <h1> {props.title}</h1>
            <img>{props.backdrop_path} {props.poster_path}</img>
           <p>Overview:{props.overview}</p>
           <p> {props.release_date}</p>
           <h1> Stars:{props.vote_average}</h1>
           <h1> Vote count:{props.vote_count}</h1>
        </div>
    )
}
export {Movie}