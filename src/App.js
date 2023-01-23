import { useAuthContext } from './hooks/useAuthContext'

import { Signup } from './pages/signup/Signup'
import { Login } from './pages/login/Login'
import { Create } from './pages/create/Create'
import { Project } from './pages/project/Project'
import { Dashboard } from './pages/dashboard/Dashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Routes>
              <Route exact path='/'
                element={user ? <Dashboard /> : <Navigate to='/login' />} />
              <Route path='/login'
                element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/signup'
                element={!user ? <Signup /> : <Navigate to='/'/>} />
              <Route path='/project/:id'
                element={user ? <Project /> : <Navigate to='/login' />} />
              <Route path='/create'
                element={user ? <Create /> : <Navigate to='/login' />} />
            </Routes>
          </div>
        </BrowserRouter >
      )}
    </div >
  );
}

export default App


