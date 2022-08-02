import {Outlet} from "react-router-dom";

const Genre = ({genre}) => {

   const {id,name} = genre;
    return (
        <div>

<div>ID:{id}</div>
<div>Name:{name}</div>
            <Outlet/>
        </div>
    );
};

export {Genre};