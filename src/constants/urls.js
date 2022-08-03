const baseURL = 'https://api.themoviedb.org/3/';
const api_key = '4fc35a355fba3a6efb119fa9acd8a5b7'

const urls = {
    movies: `discover/movie?api_key=${api_key}`,
    image: `https://image.tmdb.org/t/p/original`,
    genres: `genre/movie/list?api_key=${api_key}`,
    search: `https://api.themoviedb.org/3/search/company?api_key=${api_key}&page=1`
}

export {
    baseURL,
    urls

}
