import React from 'react'
import about from "../assets/about1.png"

const About = () => {
  return (
    <div id='aboutus'>
        <div className='px-4 lg:px-14  my-8 '>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
              <img src={about} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Welcome to Admit Wise , where your academic aspirations find expert guidance and your journey to higher education is meticulously crafted. As seasoned admission consultants, we understand the significance of making informed choices when it comes to your educational path.</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>
        </div>

        <div className='px-4 lg:px-14  bg-neutralSilver py-16'>
            <div>
                <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local<br/><span className='text-brandPrimary'>buisness reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default About