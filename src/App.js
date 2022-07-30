import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {MoviesList} from "./components"



export default function App() {

  return (
      <div>
          <MainLayout/>
          <MoviesList/>
      </div>
//       <Routes>
// <Route path={''} element={<MainLayout/>}>
//     <Route index element={<Navigate to={''}/>}/>
//     <Route path={''} element={<MoviesList/>}/>
// </Route>
//
//       </Routes>
  );
}

