import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CountryData } from '../context/DataContext'

const Capital = () => {
  const cntData = useContext(CountryData)

  const { capitalName } = useParams()
  console.log(capitalName);

  return (
    <div>

    </div>
  )
}

export default Capital
