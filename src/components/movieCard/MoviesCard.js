import css from "./MovieCard.module.css";

import {urls} from "../../constants";

import {useNavigate} from "react-router-dom";


const MoviesCard = ({movie}) => {
    const {title, poster_path, vote_average} = movie;


    const navigate = useNavigate()
    return (

        <div className={css.MainWrap}>
            <img className={css.picture} src={urls.image + poster_path} alt=""/>

            <div>
                <button className={css.btn} onClick={() => navigate('information', {state: movie})}>{title}</button>
            </div>

            <div className={css.average}>{vote_average}</div>


        </div>


    );
};

export {MoviesCard};