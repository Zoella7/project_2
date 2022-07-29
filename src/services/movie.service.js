import {axiosService} from "./axios.service";
import {baseURL, urls} from "../constants";

const movieService = {
    getAll:() => axiosService.get(urls.movies,{
        // headers:{
        //     Authorization: `Bearer ${}`
        // }
    }),
    getById:(id, data) => axiosService.get(`${urls.movies}/${id}`)
}
export {movieService}