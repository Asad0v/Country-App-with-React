import React, { useState } from 'react'

const Skeltonloader = () => {
    // const [loader, setLoader] = useState([])
    const loader = []
    for (let i = 0; i < 8; i++) {

        loader.push(<div key={i} className="flex max-w-xs flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t dark:bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
            </div>
        </div>)
    }
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {loader}
        </div>
    )
}

export default Skeltonloader
