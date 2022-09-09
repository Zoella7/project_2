import css from './Header.module.css'

import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";

import pic from "../../assets/logo.png";
import pic2 from "../../assets/userlogo.png";

const Header = () => {

    const dispatch = useDispatch();
    return (
        <div className={css.Header}>

            <div className={css.logoBox}>
                <img className={css.logo} src={pic}/>
                <h2><Link to={'/'}>Movieee</Link></h2>

            </div>
            <form>
                <input className={css.form} type="search" placeholder="Search..."/>
                <button className={css.btn} onClick={() => dispatch()
                }>Search
                </button>
            </form>


            <Link to={'genres'}>Find your Genre</Link>

            <div className={css.userBox}>
                <img className={css.userlogo} src={pic2}/>
                <p>Log in</p>
            </div>

        </div>


    );
};

export {Header};