const MoviesListCard = ({movie}) => {
    const {title, overview} = movie;

    return (

        <div>
            <div>
                <h2>{title}</h2>
                <h3>{overview}</h3>

            </div>
        </div>
    );
};

export {MoviesListCard};