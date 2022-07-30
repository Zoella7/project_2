import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Outlet} from "react-router-dom";


const MoviesList = () => {

  const {movies} = useSelector(state => state.movies)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(movieActions.getAll())

    },[])
    return (
        <div>

            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>);
};

export {MoviesList};