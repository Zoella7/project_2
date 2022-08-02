import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {GenresList} from "./components";

import {MovieforGenrePage, MovieInfoPage, MoviesListPage, NotFoundPage} from "./pages";



export default function App() {

    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>
                <Route path={'movie'} element={<MoviesListPage/>}/>
                <Route path={':id'} element={<MovieInfoPage/>}/>
                <Route path={'genres'} element={<GenresList/>}>
                    <Route path={'details'} element={<MovieforGenrePage/>}/>
                </Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>

        </Routes>
    );
}

