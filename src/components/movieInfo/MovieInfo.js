import {urls} from "../../constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";


const MovieInfo = ({title, poster_path}) => {

const dispatch = useDispatch()

    // const {id} = useParams()
    // const {title,poster_path} = movie

    useEffect(()=>{
       dispatch(movieActions.getById())
    },[dispatch])


    return (
        <div >
            <img src={urls.image+poster_path} alt="image"/>
            <div>
                {title}


            </div>
        </div>
    );
};

export {MovieInfo};

