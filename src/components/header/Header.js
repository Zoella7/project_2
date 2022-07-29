import css from './Header.module.css'

import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigete = useNavigate();


    return (<div className={css.Header}>
<div>Movie</div>
<div className={css.btn}>
    <button onClick={()=>navigete('/login')}>Login</button>
    <button onClick={()=>navigete('/register')}>Register</button>
</div>


        </div>


    );
};

export {Header};