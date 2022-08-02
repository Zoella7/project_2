
import css from "./MovieCard.module.css";
import {urls} from "../../constants";
// import {useDispatch} from "react-redux";
// import {movieActions} from "../../redux";
import {Link, useNavigate} from "react-router-dom";


const MoviesCard = ({movie}) => {
    const {title, overview,vote_average,poster_path} = movie;
    // const dispatch=useDispatch();
const navigate = useNavigate()
    return (

            <div className={css.Mainwrap}>
                <img className={css.picture} src={urls.image+poster_path} alt=""/>
<div>
    <span><Link className={css.title} to={movie.id.toString()}>{title}</Link></span>
                {/*<h2 onClick={()=>navigate('information',{state:movie})} className={css.title}>{title}</h2>*/}
                <div className={css.overview}>{overview}</div>
                <div className={css.average}> Average score:{vote_average}</div>
</div>
            </div>


    );
};

export {MoviesCard};