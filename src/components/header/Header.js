import css from './Header.module.css'

import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";

import pic from "../../assets/logo.png";
import pic2 from "../../assets/userlogo.png";
import {useForm} from "react-hook-form";
import {movieActions} from "../../redux";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const {register, handleSubmit, reset} = useForm()


    const submit = (obj) => {
        dispatch(movieActions.search({obj: obj.search}))
        reset();
        navigate('search')
    }


    return (
        <div className={css.Header}>

            <div className={css.logoBox}>
                <img className={css.logo} src={pic}/>
                <h2><Link to={'/'}>Movieee</Link></h2>

            </div>
            <form onSubmit={handleSubmit(submit)}>
                <input className={css.form} type="search" placeholder="Search..." {...register('search')}/>
            </form>


            {/*<button className={css.btn}><Link to={'genres'}>Sort by genre</Link></button>*/}
<button className={css.btn} onClick={()=>navigate('genres')}>Sort by genre</button>
            <div className={css.userBox}>
                <img className={css.userlogo} src={pic2}/>
                <p>Log in</p>
            </div>

        </div>


    );
};

export {Header};