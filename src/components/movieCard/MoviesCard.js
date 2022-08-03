import css from "./MovieCard.module.css";
import {urls} from "../../constants";

import {useNavigate} from "react-router-dom";


const MoviesCard = ({movie}) => {
    const {title, vote_average, poster_path} = movie;


    const navigate = useNavigate()
    return (

        <div className={css.Mainwrap}>
            <img className={css.picture} src={urls.image + poster_path} alt=""/>
            <div>
                {/*<span><Link className={css.title} to={movie.id.toString()}>{title}</Link></span>*/}
                {/*<h2 onClick={() => navigate('information', {state: movie})} className={css.title}>{title}</h2>*/}

                <button className={css.btn} onClick={()=>navigate('information',{state:movie})}>{title}</button>
                {/*<div className={css.average}> Average score:{vote_average}</div>*/}
            </div>
        </div>


    );
};

export {MoviesCard};