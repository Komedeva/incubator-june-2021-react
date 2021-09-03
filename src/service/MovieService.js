import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzMxNWJlYWY2NmQ1Y2E0ZTM4MTI2YzRlMzVjOGFjMyIsInN1YiI6IjYxMmY2NWMyMTIxOTdlMDAyYWMwOGUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MsMLNzvs84P0C9DOu8ws5b_2wv6DKO2Y5HhabvciuQ'
    }
})

const MovieImagesApi = "kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

// const ImgJson= "https://jsonplaceholder.typicode.com/photos"
//
// function getIMG() {
//     return fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(value => value.json())
// }

// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
// search: "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="


const DiscoverMovie = async () => await instance.get('/discover/movie')

export {DiscoverMovie, MovieImagesApi}