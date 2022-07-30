// import axios from "axios";
// import {baseURL} from "../constants";
//
//
// const axiosService = axios.create({baseURL})
//
// axiosService.interceptors.request.use((config) => {
//
//     const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U'
// if (access) {
//     config.headers.Autorization = `Bearer${access}`
// }
// return config
// })
// export {axiosService}

import axios from "axios";

const config = { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain", }, };
const axiosService = axios.create({ baseURL: "https://api.themoviedb.org/3", https: config, });

export default axiosService;