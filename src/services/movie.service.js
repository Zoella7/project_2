import axiosService from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.genreByID+id}`),
    search: (obj) => axiosService.get(`${urls.search+obj}`)

}
export {movieService}
