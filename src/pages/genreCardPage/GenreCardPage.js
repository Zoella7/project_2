import {GenreCard} from "../../components";
import {Outlet} from "react-router-dom";


const GenreCardPage = () => {
    return (
        <div>
            <GenreCard/>
            <Outlet/>

        </div>
    );
};

export {GenreCardPage};