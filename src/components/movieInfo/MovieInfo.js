import {useLocation} from "react-router-dom";
import css from "./MovieInfo.module.css"
import {urls} from "../../constants";
import {Rating} from 'react-simple-star-rating'
import {useState} from "react";

const MovieInfo = () => {


    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const location = useLocation()
    const {state} = location

    const {title, poster_path, overview, original_title, release_date, vote_average, popularity, vote_count} = state;
    return (
        <div className={css.wrap}>
            <h2 className={css.title}>{title}</h2>
            <hr/>
            <div className={css.mainBox}>

                <img className={css.picture} src={urls.image + poster_path} alt="poster"/>

                <div className={css.infoBox}>
                    <h2>Original lenguage: {original_title}</h2>
                    <p>Realease date: {release_date}</p>
                    <p>Vote average: {vote_average}</p>
                    <p>Vote count: {vote_count}</p>
                    <p>Popularity: {popularity}</p>
                    <h2>About what this film</h2>
                    <p>{overview}</p>
                    <hr/>
                    <div className='App'>
                        <Rating onClick={handleRating} ratingValue={rating}/>
                    </div>
                    <hr/>

                    <button className={css.btn}>Watch movie</button>
                    <button className={css.btn}>Watch trailer</button>

                </div>

            </div>


        </div>
    );
};

export {MovieInfo};

