
import { useContext, useEffect, useState } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Error from './pages/Error';
import Detail from './pages/Detail';
import Capital from './pages/Capital';
import RootLaytout from './layout/RootLaytout';
import Admin from './pages/Admin';
import AdminLayoyt from './layout/AdminLayoyt';


function App() {
  

  

  return (
    <>

      <Routes>
        <Route path='/' element={<Navigate to={'/countries'} />} />

        <Route path='/' element={<RootLaytout   />}>
          <Route path='/countries'>
            <Route index element={<Main />} />
            <Route path=':regParams' element={<Main />} />
          </Route>

          <Route path='/detail'>
            <Route index path=':code' element={<Detail  />} />
            <Route path=':code/:capital' element={<Capital  />} />
          </Route>

          <Route path='login' element={<Login />} />
        </Route>

        <Route path='*' element={<Error />} />

        <Route path='/admin' element={<AdminLayoyt />}>
          <Route index  element={<Admin />} />
        </Route>

      </Routes>


    </>
  )
}

export default App;

