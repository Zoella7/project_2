import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions, movieActions} from "../../redux";

import {GenreCard} from "../genreCard/GenreCard";




const GenresList = () => {

    const {allGenres} = useSelector(state => state.genres)
    const {movies} = useSelector(state => state.movies)

    const dispatch = useDispatch()
    
    const {genres} = allGenres
    const {results} = movies

    useEffect(()=>{
        dispatch(genreActions.getAllGenres())
dispatch(movieActions.getAll())
    },[])

    const filter =(idGenre)=>{
        const filterMovie = results?.filter(movie =>{
            console.log("movieID",movie.genre_ids);
         return movie.genre_ids === idGenre 
        })
        console.log(filterMovie);
        console.log("genrID",idGenre);
        
    }
    return (

        <div>

            {genres && genres.map(genre =><GenreCard key={genre.id} genre={genre} filter={filter}/>)}
            
        </div>



    );
};

export {GenresList};