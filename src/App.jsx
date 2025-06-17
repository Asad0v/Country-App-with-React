
import { useEffect, useState } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Error from './pages/Error';
import Detail from './pages/Detail';
import Capital from './pages/Capital';


function App() {
  const [cntData, setCntData] = useState([])
  const [region, setRegion] = useState(null )
  
 useEffect( () => {
  
  fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
  .then(res => res.json())
  .then(item => setCntData(item))
 },[])
 console.log(cntData);
 
  
  return (
    <>
      <Header setRegion={setRegion} cntData={cntData} />
      <Routes>
        <Route path='/' element={<Navigate to={'/countries'} /> } />
        <Route path='/countries' element={<Main rgn={region} cntData={cntData} />} />
        <Route path='/countries/:regParams' element={<Main  cntData={cntData} />} />
        <Route path='login'  element={<Login />}/>
        <Route path='/detail'>
          <Route index path=':code'  element={<Detail cntData={cntData}  />}/>
          <Route path=':code/:capital' element={<Capital cntData={cntData} />}  />
        </Route>
        
        <Route path='*' element={<Error /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

