import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux";

import {GenreCard} from "../genreCard/GenreCard";


const GenresList = () => {

    const {allGenres} = useSelector(state => state.genres)

    const dispatch = useDispatch()

    const {genres} = allGenres


    useEffect(() => {
        dispatch(genreActions.getAllGenres())

    }, [])

    return (

        <div>
            <div>
                <hr/>
            </div>
            {genres && genres.map(genre => <GenreCard key={genre.id} genre={genre}/>)}
            <div>
                <hr/>
            </div>
        </div>


    );
};

export {GenresList};