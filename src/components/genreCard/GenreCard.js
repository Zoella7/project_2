import css from "./GenreCard.module.css"
import {useNavigate} from "react-router-dom";



const GenreCard = ({genre}) => {
    const navigate = useNavigate()

      const {name,id} = genre;

    return (


    <button className={css.button} onClick={()=>navigate('details',{state:id})}>{name}</button>
    )};

export {GenreCard};