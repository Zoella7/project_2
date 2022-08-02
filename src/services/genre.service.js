import axiosService from "./axios.service";
import {urls} from "../constants";

const genreService = {
    getAll:() => axiosService.get(urls.genres),

    }
export {genreService}