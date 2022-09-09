const baseURL = 'https://api.themoviedb.org/3/';
const api_key = '4fc35a355fba3a6efb119fa9acd8a5b7'

const urls = {
    movies: `discover/movie?api_key=${api_key}&page=1`,
    image: `https://image.tmdb.org/t/p/original`,
    genres: `genre/movie/list?api_key=${api_key}`,
    genreByID: `discover/movie?api_key=${api_key}&with_genres=`,
    search: `search/movie?api_key=${api_key}&language=en-US&query=`
}

export {
    baseURL,
    urls

}
