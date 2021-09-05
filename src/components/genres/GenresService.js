function GetGenres() {
return fetch('https://api.themoviedb.org/3/genre/movie/list')
    .then(value => value.json())
}
export {GetGenres};