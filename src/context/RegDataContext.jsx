import React, { createContext, useContext } from 'react'
import { CountryData } from './DataContext'

export const RegionData = createContext() 

const RegDataContext = ( { children } ) => {
    const {cntData} = useContext(CountryData)
    const regData = [...new Set(cntData.map(item => item.region))]
  return (
    <div>
      <RegionData.Provider value={regData}>
        {children}
      </RegionData.Provider>
    </div>
  )
}

export default RegDataContext
