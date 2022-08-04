import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {MoviesCard} from "../movieCard";

import css from "./GenreInfo.module.css"

const GenreInfo = () => {

    const {moviesByGenre} = useSelector(state => state.movies)
    const {results} = moviesByGenre

    const dispatch = useDispatch()

    const {state} = useLocation()

    useEffect(() => {
        dispatch(movieActions.getById({id: state}))

    }, [state])


    return (<div className={css.wraper}>

            {results && results.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {GenreInfo};