import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzMxNWJlYWY2NmQ1Y2E0ZTM4MTI2YzRlMzVjOGFjMyIsInN1YiI6IjYxMmY2NWMyMTIxOTdlMDAyYWMwOGUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MsMLNzvs84P0C9DOu8ws5b_2wv6DKO2Y5HhabvciuQ'
    }
})



const DiscoverMovie = async () => await instance.get('/discover/movie')

export {DiscoverMovie}