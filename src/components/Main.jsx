import { React, useContext, useEffect, useRef, useState } from 'react'
import RandCard from './RandCard';
import { Link, useParams } from 'react-router-dom';
import Error from '../pages/Error';
import { CountryData } from '../context/DataContext';
import { RegionData } from '../context/RegDataContext';
import LoaderHeader from './LoaderHeader';

function Main() {

  const { cntData , error, loader  } = useContext(CountryData)
  const regData = useContext(RegionData)

  const { regParams } = useParams()
  console.log(regParams);

  const isHave = regData.some(item => item == regParams)
  console.log(isHave);

  const [status, setStatus] = useState(false)
  const [value, setValue] = useState('')
  const inpRef = useRef(null)
  useEffect(() => {
    if (status) {
      inpRef.current.focus();
    }
  }, [status])
  function showInp() {
    setStatus(!status)


  }
  if(loader){
    return <LoaderHeader />
  }
  if (regParams && !isHave || error) {
    return <Error />
  }

  return (
    <div className='bg-indigo-50 text-black dark:bg-indigo-900 dark:text-gray-100'>

      {
        !regParams &&
        <div className='w-full flex flex-col justify-center py-[65px] md:py-[105px] items-center dark:bg-indigo-900 dark:text-gray-50'>
          <h1 className='text-[30px] md:text-5xl font-bold  pb-12 tracking-tight'>Welcome to CountryApp Website</h1>
          <h2 className="text-[#8B5CF6] text-[30px] md:text-4xl font-bold tracking-tight">You can find data of any country in this website.</h2>
          <input ref={inpRef} onChange={(e) => setValue(e.target.value)} type="text" className={`${status ? 'flex' : 'hidden'}    border-2 bg-[#666] mt-5`} />
          <div className="flex flex-col md:flex-row gap-7 my-7">
            <button onClick={() => scroolToBottom()} className="bg-[#8B5CF6] cursor-pointer text-white font-medium uppercase w-[170px] py-3 rounded-lg">Have a look</button>
            <button onClick={showInp} className="bg-black cursor-pointer text-white font-medium w-[170px] py-3 rounded-lg">Search</button>
          </div>
        </div>
      }
      { !regParams && !status && <RandCard cntData={cntData} />}


      <div className='py-5 flex justify-center items-center flex-wrap gap-5  dark:bg-indigo-900 dark:text-gray-100'>
        {

          cntData
            .filter(item => regParams ? item.region == regParams : item)
            .filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
            .map((item, i) => <div key={i} className="max-w-xs  shadow-md hover:shadow-2xl hover:shadow-gray- group  bg-indigo-200 text-black dark:bg-gray-800 dark:text-gray-100">
              <img src={item.flag} alt="" className="object-cover object-center w-full  h-52 dark:bg-gray-500" />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h3 className='text-md'>{item.region}</h3>
                  <Link to={`/detail/${item.alpha3Code}`}>
                    <h2 className="text-xl font-semibold tracking-wide group-hover:underline ">{item.name}</h2>
                  </Link>

                  <div className='flex justify-between'>
                    <p>Population: {item.population}</p>
                    <p>{item.area}</p>
                  </div>
                </div>
              </div>
            </div>)}
      </div>
    </div>
  )
  function scroolToBottom() {
    window.scrollBy({ top: 550, behavior: "smooth" });
  }
}

export default Main
