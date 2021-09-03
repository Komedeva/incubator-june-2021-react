const url= 'https://api.themoviedb.org/3/genre/movie/list'

function getGenres() {
    return fetch('url')
        .then(value => value.json())
}

import {getGenres};