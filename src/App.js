import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";

import {LoginPage, MoviePage} from "./pages";


function App() {

  return (<div>


          <Routes>

              <Route path={''} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'login'}/>}/>
                  <Route path={'login'} element={<LoginPage/>}/>
                  <Route path={'movies'} element={<MoviePage/>}/>

              </Route>

          </Routes>
      </div>





      );
}

export {App};
