import React, { useState } from 'react'
import Navbar from './Navbar'
import { GiWorld } from 'react-icons/gi'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

function Header({cntData , setRegion}) {
    const [status, setStatus] = useState(false)
    const [ isdark, setIsDark] = useState(true)
    
    

    const regData = []
    cntData.map(item => {
        if (!regData.includes( item.region)) {
            regData.push(item.region)
        }
    })
    
    function handleTheme() {
        setIsDark(!isdark)
        document.documentElement.classList.toggle('dark')
    }
    
    
    
    
    
    return (
        <>
            <header className="p-4 bg-indigo-200 text-black dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between items-center h-16 mx-auto md:justify-center md:space-x-8">
                    
                    <ul className="items-stretch hidden space-x-3 md:flex">
                       
                        {regData.slice(0,4).map((item , i) => <li  onClick={()=> setRegion(item)}  key={i} className="flex">
                            <p  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{item}</p>
                        </li>)}
                    </ul>
                    <p onClick={() => setRegion(null)}  aria-label="Back to homepage" className="flex items-center p-2">
                        <GiWorld size={40} className='text-[#8B5CF6]' />
                    </p>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                       
                        {regData.slice(4).map((item, i) => <li onClick={()=> setRegion(item)} key={i} className="flex">
                            <p  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{item}</p>
                        </li> )}
                    </ul>
                    <div className='flex gap-3'>
                        {
                            isdark ? 
                            <IoMoonOutline className='cursor-pointer' onClick={handleTheme} size={30} /> :
                            <IoSunnyOutline className='cursor-pointer' onClick={handleTheme} size={30} /> 
                        }
                    </div>
                    <button onClick={() => setStatus(!status)} title="Button" type="button" className="p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
            <Navbar cntData={cntData} status={status} />
            
            
        </>
    )
    
    
}

export default Header
