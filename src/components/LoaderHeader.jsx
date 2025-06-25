import React from 'react'
import Skeltonloader from './Skeltonloader';
const LoaderHeader = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center py-[65px] md:py-[105px] items-center dark:bg-indigo-900 dark:text-gray-50 animate-pulse'>
      
      {/* H1 Skeleton */}
      <div className='h-[40px] md:h-[60px] w-[280px] md:w-[500px] bg-indigo-900 dark:bg-gray-700 rounded mb-6'></div>

      {/* H2 Skeleton */}
      <div className='h-[35px] md:h-[50px] w-[260px] md:w-[450px] bg-indigo-900 dark:bg-gray-700 rounded mb-10'></div>

      {/* Input Skeleton */}
      <div className='h-[45px] w-[250px] bg-indigo-900 dark:bg-gray-700 rounded mb-8'></div>

      {/* Buttons Skeleton */}
      <div className="flex flex-col md:flex-row gap-7">
        <div className='h-[45px] w-[170px] bg-indigo-900 dark:bg-gray-700 rounded'></div>
        <div className='h-[45px] w-[170px] bg-indigo-900 dark:bg-gray-700 rounded'></div>
      </div>
    </div>
    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 animate-pulse">
      <div className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 dark:bg-[#E5E7EB]">
        
        {/* Şəkil hissəsi */}
        <div className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-indigo-900 dark:bg-gray-600" />

        {/* Məlumat hissəsi */}
        <div className="p-6 space-y-3 lg:col-span-5 shadow-md bg-indigo-200 dark:bg-gray-800">
          <div className="h-10 w-3/4 bg-indigo-900 dark:bg-gray-600 rounded" />
          <div className="h-4 w-1/3 bg-[#8B5CF6] rounded" />
          <div className="h-4 w-1/2 bg-indigo-900 dark:bg-gray-600 rounded" />
          <div className="h-4 w-2/3 bg-indigo-900 dark:bg-gray-600 rounded" />
          <div className="h-4 w-1/2 bg-indigo-900 dark:bg-gray-600 rounded" />
        </div>
      </div>
    </div>
     <Skeltonloader /> 
    </>
  )
}

export default LoaderHeader
