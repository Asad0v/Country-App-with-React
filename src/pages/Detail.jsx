import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Error from './Error';

const Detail = ({ cntData }) => {
    const { code } = useParams()
    console.log(code);
    const obj = cntData.find(item => item.alpha3Code == code)
    if(!obj){
        return <Error />
    }
    return (
        <>
            {
                obj && (<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12  bg-indigo-50 my-5 rounded-2xl shadow-2xl ">
                    

                        <div className="p-6 space-y-2 lg:col-span-5 shadow-md bg-indigo-200 text-black dark:bg-gray-800 dark:text-gray-100 ">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                {obj.name}
                            </h3>
                            <span className="text-md dark:text-[#8B5CF6] underline">{obj.region}</span>
                            <Link to={`${obj.capital}`}>
                                <p className='hover:underline'>Capital: {obj.capital}</p>
                            </Link>
                            <p>Area: {obj.area} km<sup>2</sup></p>
                            <p>Population: {obj.population}</p>
                        </div>
                        <img
                            src={obj.flag}
                            alt=""
                            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                        />
                </div>)
            }
        </>

    )
}

export default Detail
