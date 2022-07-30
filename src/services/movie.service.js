import {axiosService} from "./axios.service";
import {baseURL, urls} from "../constants";

const movieService = {
    getAll:() => axiosService.get(urls.movies),
    getById:(id, data) => axiosService.get(`${urls.movie}/${id}`)
}
export {movieService}