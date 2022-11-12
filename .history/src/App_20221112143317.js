import {HashRouter,Route,Routes} from 'react-router-dom'
import { Login } from './component/login/login';
import { Prueba } from './component/prueba/prueba';
import { RouteGuard } from './component/routeGuard/routeGuard';
import { Welcome } from './component/welcome/welcome';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/prueba' element={<Prueba/>}/>
      </Routes>
      <RouteGuard path='/' element={<Welcome/>}/>
    </HashRouter>
  );
}

export default App;
