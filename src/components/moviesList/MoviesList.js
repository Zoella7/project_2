import {useDispatch, useSelector} from "react-redux";

import {MoviesCard} from "../movieCard";
import {useEffect} from "react";

import {movieActions} from "../../redux";

import css from "./MoviesList.module.css"
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const {movies, prev, next} = useSelector(state => state.movies)

    const dispatch = useDispatch()

    const [query, setQuery] = useSearchParams({page: '1'})

    const {results} = movies

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))

    }, [query])


    const prevPage = () => {
        const page = +query.get('page') - 1;
            setQuery({page:`${page}`})
    }

    const nextPage = () => {
        const page = +query.get('page') + 1;
        setQuery({page:`${page}`})
    }

    return (<div>

        <div className={css.wrapBox}>

            {results && results.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}


        </div>
            <hr/>
            <div className={css.btnWrap}>
            <button className={css.btn} disabled={prev} onClick={prevPage}>Previous</button>
            <button className={css.btn} disabled={next} onClick={nextPage}>Next</button>
            </div>
        </div>

    );
};

export {MoviesList};