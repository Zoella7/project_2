import {useDispatch, useSelector} from "react-redux";

import {MoviesCard} from "../movieCard";
import {useEffect} from "react";

import {movieActions} from "../../redux";

import css from "./MoviesList.module.css"



const MoviesList = () => {

    const {movies} = useSelector(state => state.movies)

    const dispatch = useDispatch()



    const {results} = movies
    useEffect(() => {
        dispatch(movieActions.getAll())

    }, [])


    return (

    <div className={css.wrapBox}>

        {results && results.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}

    </div>
)
    ;
};

export {MoviesList};