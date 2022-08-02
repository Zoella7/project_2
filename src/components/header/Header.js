import css from './Header.module.css'

import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";

// import pic from "../../assets/logo.png";

const Header = () => {

const dispatch= useDispatch();
    return (
        <div className={css.Header}>

<div className={css.logoBox}>
    {/*<img className={css.logo} src={pic}/>*/}
    <h2>Movieee</h2>

</div>
            <form>
                <input className={css.form} type="search" placeholder="Search..."/>
                <button onClick={()=>dispatch()
                }>Submit</button>
            </form>
<div>
    <Link to ={'genres'}>Find your Genre</Link>
   </div>

        </div>


    );
};

export {Header};