
import {useLocation} from "react-router-dom";
import css from "../movieCard/MovieCard.module.css";
import {urls} from "../../constants";


const MovieInfo = () => {
    const location= useLocation()
    const {state} = location

    const {title,backdrop_path} = state;
    return (
        <div className={css.mainBlock}>
            <h2>{title}</h2>
            <div className={css.poster}><img  src={urls.image + backdrop_path} alt="poster"/></div>

       </div>
    );
};

export {MovieInfo};

