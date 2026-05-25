import Just from './Just.tsx';
import Login from './authenication/signin.tsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admin from './pages/Admin.tsx';
import './App.css';
import Events from './components/events.tsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes >
       <Route path='/' element={<Just/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/admin' element={<Admin/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
