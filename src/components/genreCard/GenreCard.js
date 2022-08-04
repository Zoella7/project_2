import css from "./GenreCard.module.css"
import {useNavigate} from "react-router-dom";





const GenreCard = ({filter,genre}) => {
const navigate = useNavigate()
   const {name} = genre;

    return (

<button className={css.button} onClick={()=>filter(genre.id)}>{name}</button>

    // <button className={css.button} onClick={()=>navigate('details',{state:genre})}>{name}</button>
    )};

export {GenreCard};