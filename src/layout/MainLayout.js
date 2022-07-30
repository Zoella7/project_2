import {Outlet} from "react-router-dom";

import {Header} from "../components"

import {MoviesList} from "../components"
import {HomePage} from "../pages/homePage/HomePage"

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
<HomePage/>
        </div>
    );
};

export {MainLayout};