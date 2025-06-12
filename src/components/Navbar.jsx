import React from 'react'



function Navbar({status ,  cntData }) {
    
    const regData = []
    cntData.map(item => {
        if (!regData.includes( item.region)) {
            regData.push(item.region)
        }
    })
    
    
    
  return (
    <div className={`${status ? 'flex' : 'hidden' }  md:hidden justify-center items-center p-3 w-full bg-[#eee] border-2>`}>
      <ul className='flex w-full flex-col items-center gap-4'>
        {regData
            .map((item,i) =>
             <div className='flex flex-col gap-5 text-center' key={i}>
                <hr className='w-[290px] text-gray-300'  /> <li key={i}  className=''>{item }</li>
            </div>
        )}
      </ul>
    </div>
  )
}

export default Navbar
