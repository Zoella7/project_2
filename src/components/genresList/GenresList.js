import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux";

import {Genre} from "../genre/Genre";


const GenresList = () => {

    const {genres} = useSelector(state => state.genres)

    const dispatch = useDispatch()
    const {results}= genres
    useEffect(()=>{
        dispatch(genreActions.getAll())

    },[])

    return (
        <div>
            {results && results.map(genre =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};