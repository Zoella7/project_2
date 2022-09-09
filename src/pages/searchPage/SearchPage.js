import {MoviesCard} from "../../components";
import {useSelector} from "react-redux";

import css from "./search.module.css"

const SearchPage = () => {
    const {search} = useSelector(state => state.movies);

    const {results} = search;




    return (
        <div className={css.wrap}>


            {results && results.map(movie =><MoviesCard key={movie.id} movie={movie}/>)}
            {/*<h3>results were found for your query</h3>*/}
        </div>
    );
};

export {SearchPage};