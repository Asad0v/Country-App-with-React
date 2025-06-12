import React, { useEffect, useState } from 'react'

function RandCard({cntData }) {
  const  [country, setCountry ] = useState({})
    
  useEffect(() => {
    setCountry(cntData[Math.floor(Math.random() * cntData.length)])
  },[cntData])  
// const country = cntData[Math.floor(Math.random() * cntData.length)]
    return (
      
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12   ">
    <a
      href="#"
      rel="noopener noreferrer"
      className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-[#E5E7EB]"
    >
      <img
        src={country.flag}
        alt=""
        className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
      />
      <div className="p-6 space-y-2 lg:col-span-5 shadow-md bg-indigo-200 text-black dark:bg-gray-800 dark:text-gray-100 ">
        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
          {country.name}
        </h3>
        <span className="text-md dark:text-[#8B5CF6] underline">{country.region}</span>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km<sup>2</sup></p>
        <p>Population: {country.population}</p>
      </div>
    </a>
  </div>
  
    )
 
}

export default RandCard
