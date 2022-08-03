import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux";

import {GenreCard} from "../genreCard/GenreCard";




const GenresList = () => {

    const {genres} = useSelector(state => state.genres)

    const dispatch = useDispatch()
    const {results}= genres
    useEffect(()=>{
        dispatch(genreActions.getAllGenres())

    },[])

    return (

        <div>

            {results && results.map(genre =><GenreCard key={genre.id} genre={genre}/>)}
        </div>



    );
};

export {GenresList};