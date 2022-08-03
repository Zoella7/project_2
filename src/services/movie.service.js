import axiosService from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll:() => axiosService.get(urls.movies),
    // getById:(id)=> axiosService.get(`${urls.movies}/${id}`),

}
export {movieService}
