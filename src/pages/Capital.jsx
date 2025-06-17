import React from 'react'
import { useParams } from 'react-router-dom'

const Capital = ({cntData}) => {
  const { capitalName } = useParams()
  console.log(capitalName);
  
  return (
    <div>
      
    </div>
  )
}

export default Capital
