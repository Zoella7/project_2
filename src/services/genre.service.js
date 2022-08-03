import axiosService from "./axios.service";
import {urls} from "../constants";

const genreService = {
    getAllGenres:() => axiosService.get(urls.genres),

    }
export {genreService}