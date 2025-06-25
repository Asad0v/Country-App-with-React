import React, { createContext, useEffect, useState } from 'react'
import { getAllCountries } from '../service/CountryServices'

export const CountryData = createContext()

const DataContext = ( { children } ) => {
    const [cntData, setCntData] = useState([])
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(true)
    
      useEffect(() => {
        getAllCountries()
          .then(item => setCntData(item))
          .catch(err => setError(err || 'fetch-de xeta bash verdi'))
          .finally(() => setLoader(false))
      }, [])
      console.log(cntData);
      const obj = {
        cntData,
        error,
        loader
      }

  return (
    <div>
      <CountryData.Provider value={obj}>
        {children}
      </CountryData.Provider>
    </div>
  )
}

export default DataContext
