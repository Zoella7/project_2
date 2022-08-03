import {urls} from "../../constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";
import {useParams} from "react-router-dom";


const MovieInfo = ({title, poster_path}) => {

const dispatch = useDispatch()

    const {id} = useParams()
    // const {title,poster_path} = movie

    useEffect(()=>{
       dispatch(movieActions.getById())
    },[id])


    return (
        <div >
            <img src={urls.image+poster_path} alt="image"/>
            <div>
                <h2>{title}</h2>


            </div>
        </div>
    );
};

export {MovieInfo};

