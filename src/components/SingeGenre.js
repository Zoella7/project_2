import React from 'react';
import {useLocation} from "react-router-dom";

const SingeGenre = ({movie}) => {
    const {title,genre_ids} = movie
    const {state} = useLocation()
    console.log(state);
    return (
        <div>

            if(state.id === genre_ids){
            <h2>{title}</h2>
        }

        </div>
    );
};

export default SingeGenre;