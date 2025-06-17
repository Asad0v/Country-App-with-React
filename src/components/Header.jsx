import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { GiWorld } from 'react-icons/gi'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Header({cntData , setRegion}) {
    const [status, setStatus] = useState(false)
    const [ isdark, setIsDark] = useState(false)
    
    

    const regData = []
    cntData.map(item => {
        if (!regData.includes( item.region)) {
            regData.push(item.region)
        }
    })
     useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);
    
    function handleTheme() {
        
            setIsDark(!isdark)
            if(!isdark){
                document.documentElement.classList.toggle('dark')
                localStorage.setItem('theme', 'dark')
            }else{
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
       
    }
    
    
    
    
    
    return (
        <>
            <header className="p-4 bg-indigo-200 text-black dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between items-center h-16 mx-auto md:justify-center md:space-x-8">
                    
                    <ul className="items-stretch hidden space-x-3 md:flex">
                       
                        {regData.slice(0,4).map(
                            (item , i) => 
                                <Link key={i} to={`/countries/${item}`}>
                                    <li  onClick={()=> setRegion(item)}  key={i} className="flex">
                                        <p  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{item}</p>
                                    </li>
                                </Link>
                        )}
                    </ul>
                    <Link to={'/countries'} onClick={() => setRegion(null)}  aria-label="Back to homepage" className="flex items-center p-2">
                        <GiWorld size={40} className='text-[#8B5CF6]' />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                       
                        {regData.slice(4).map(
                            (item, i) => 
                                <Link to={`countries/${item}`}>
                                    <li onClick={()=> setRegion(item)} key={i} className="flex">
                                        <p  className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{item}</p>
                                    </li> 
                                </Link>
                        )}
                    </ul>
                    <div className='flex gap-3'>
                        {
                            isdark ? 
                            <IoMoonOutline className='cursor-pointer hover:rotate-[-45deg] duration-500' onClick={handleTheme} size={30} /> :
                            <IoSunnyOutline className='cursor-pointer hover:rotate-[45deg] duration-500 ' onClick={handleTheme} size={30} /> 
                        }
                    </div>
                    <div>
                        <Link to={'/login'}>
                            <button>Sign In</button>
                        </Link>
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
