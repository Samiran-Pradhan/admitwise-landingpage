import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky ]= useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.addEventListener('scroll',handleScroll);
        };
    });
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Services", path: "services"},
        {link: "Partners", path: "partners"},
        {link: "About Us", path: "aboutus"},
        {link: "Testimonial", path: "testimonials"},
        {link: "FAQ", path: "faq"},

    ];
  return (
    <div>
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300":""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center'/></a>
                    <ul className='md:flex space-x-12 hidden'> 
                     <li className='block text-base text-grey900 hover:text-brandPrimary first:font-medium '>Home</li>
                     <li className='block text-base text-grey900 hover:text-brandPrimary first:font-medium '>Services</li>
                     <li className='block text-base text-grey900 hover:text-brandPrimary first:font-medium '>Partners</li>
                     <li className='block text-base text-grey900 hover:text-brandPrimary first:font-medium '>About us</li>
                     <li className='block text-base text-grey900 hover:text-brandPrimary first:font-medium '>Testimonials</li>
                     <li className='block text-base text-grey900 hover:text-brandPrimary first:font-medium '>FAQ</li>
                    </ul>

                    <div className='space-x-12 lg:flex items-center'>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  );
}

export default Navbar