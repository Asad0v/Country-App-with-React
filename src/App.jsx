
import { useEffect, useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'


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
      <Main rgn={region} cntData={cntData} />
      <Footer />
    </>
  )
}

export default App;

