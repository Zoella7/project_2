import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import SingeGenre from "../SingeGenre";


const GenreInfo = () => {

    const {movies} = useSelector(state => state.movies)

    const dispatch = useDispatch()

    const {state} = useLocation()
// console.log(state);
    const {results} = movies
    useEffect(() => {
        dispatch(movieActions.getAll())

    }, [])


    return (<div>



        {results && results.map(movie => <SingeGenre key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {GenreInfo};