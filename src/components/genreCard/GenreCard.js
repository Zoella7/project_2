
const GenreCard = ({genre}) => {

   const {id,name} = genre;
    return (
        <div>

<div>ID:{id}</div>
<div>Name:{name}</div>

        </div>
    );
};

export {GenreCard};