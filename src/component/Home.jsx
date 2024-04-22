import React from 'react'
import banner from "../assets/banner.png";


const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='px-10 lg:px-14 max-w-screen-2xl mx-auto'>
                <div className='my-28 md:my-20 py-50 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-brandPrimary leading-snug'>Your Jouney Starts Here </p>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Embrake Your Academic Journey <span className='text-brandPrimary leading-snug'>With Confidence</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Our seasoned admission consultants are dedicated to navigating the intricate pathways of college admissions. With personalized strategies and in-depth knowledge, we empower you to confidently pursue your dream education in renowned institutions.</p>
                        <button className='btn-primary'>Book An Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home