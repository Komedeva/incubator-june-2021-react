function GetGenres() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzMxNWJlYWY2NmQ1Y2E0ZTM4MTI2YzRlMzVjOGFjMyIsInN1YiI6IjYxMmY2NWMyMTIxOTdlMDAyYWMwOGUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MsMLNzvs84P0C9DOu8ws5b_2wv6DKO2Y5HhabvciuQ'
        }
    })
        .then(value => value.json())
}

export {GetGenres};