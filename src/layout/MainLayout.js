import {Outlet} from "react-router-dom";

import {Header} from "../components"

import {MoviesList} from "../components"


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>


        </div>
    );
};

export {MainLayout};