import React from 'react'

const Services = () => {
    const services = [
        {id: 1,title: "Explore",description:"Unlock the Doors to Opportunity: Explore Colleges, Expand Horizons, and Shape Your Tomorrow with Confidence.",image:"/src/assets/explore.png"},
        {id: 2,title: "Search",description:"Unlock the Doors to Opportunity: Explore Colleges, Expand Horizons, and Shape Your Tomorrow with Confidence.",image:"/src/assets/search.png"},
        {id: 3,title: "Admit",description:"Unlock the Doors to Opportunity: Explore Colleges, Expand Horizons, and Shape Your Tomorrow with Confidence.",image:"/src/assets/admit.png"}
    ]
  return (
    <div className='md:px-4 px-1 py-1 max-w-screen-xl mx-auto' id='services'>
      <div className='text-center my-8'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Services</h2>
      <p className='text-neutralGrey'>Explore our transparent pricing structure offering various plans tailored to meet diverse needs. Select the plan that aligns with your requirements and enjoy a seamless experience with our services</p>
      </div>
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        <div className='px-4 py-4 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
        <div>
            <div className='mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src="/src/assets/explore.png" alt="" /></div>
            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>Explore</h4>
            <p className='text-sm text-neutralDGrey '>Unlock the Doors to Opportunity: Explore Colleges, Expand Horizons, and Shape Your Tomorrow with Confidence.</p>
        </div>
        </div>
        <div className='px-4 py-4 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
        <div>
            <div className='mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src="/src/assets/search.png" alt=""/></div>
            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>Search</h4>
            <p className='text-sm text-neutralDGrey '>Unlock the Doors to Opportunity: Explore Colleges, Expand Horizons, and Shape Your Tomorrow with Confidence.</p>
        </div>
        </div>
        <div className='px-4 py-4 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
        <div>
            <div className='mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src="/src/assets/admit.png" alt="" /></div>
            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>Admit</h4>
            <p className='text-sm text-neutralDGrey '>Unlock the Doors to Opportunity: Explore Colleges, Expand Horizons, and Shape Your Tomorrow with Confidence.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services