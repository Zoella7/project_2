import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";

import {GenresListPage, GenreInfoPage, MovieInfoPage, MoviesListPage, NotFoundPage} from "./pages";
import {SearchPage} from "./pages/searchPage/SearchPage";


export default function App() {

    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviesListPage/>}/>
                <Route path={'movie/information'} element={<MovieInfoPage/>}/>

                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'search/information'} element={<MovieInfoPage/>}/>


                <Route path={'genres'} element={<GenresListPage/>}>
                    <Route path={'details'} element={<GenreInfoPage/>}/>
                </Route>
            </Route>

            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );

}

