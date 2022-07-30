const MoviesListCard = ({movie}) => {
    const {title, overview} = movie;

    return (

        <div>

            <div className={movie}>
                <h2>All fresh movies{title}</h2>
                <h3>hrt{overview}</h3>

            </div>

        </div>
    );
};

export {MoviesListCard};