import css from './Header.module.css'

import {NavLink} from "react-router-dom"




const Header = () => {


    return (<div className={css.Header}>
            <h2>Movieee</h2>

<div>
    <NavLink to ={'serials'}>Serials</NavLink>
    <NavLink to ={'films'}>Films</NavLink>
    <NavLink to ={'cartoons'}>Cartoons</NavLink>
</div>

        </div>


    );
};

export {Header};