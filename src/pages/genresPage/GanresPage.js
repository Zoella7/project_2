import {useDispatch, useSelector} from "react-redux";


import {useEffect} from "react";

import {genreActions} from "../../redux";
import {GenrePage} from "../genrePage/GenrePage";



const GanresPage = () => {

    const {genres} = useSelector(state => state.genres)

    const dispatch = useDispatch()
    const {results}= genres
    useEffect(()=>{
        dispatch(genreActions.getAllGenres())

    },[])
    return (
        <div>

            {results && results.map(genre =><GenrePage key={genre.id} movie={genre}/>)}
        </div>);
};

export {GanresPage};