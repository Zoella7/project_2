
const GenreCard = ({genre}) => {

   const {id,name} = genre;

    return (
        <div>

<p>ID:{id}</p>
<h2>Name:{name}</h2>

        </div>
    );
};

export {GenreCard};