import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll';


export default function Main() {
  return (
    <div name="home" className='bg-black text-white w-full h-screen'>
        <div className=' max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row h-full justify-center items-center '>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold' >
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-400 py-4 max-w-md  '>
                    I have 8 years of experience building and designing software. Currently, I love to work on Web application using technologies like React,Tailwind,Next JS GraphQL. 
                </p>
                <Link to='portfolio' smooth duration={500}>
                <div className=''>
                    <button className=' group px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  '>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight className=' ml-1' size={25} />
                        </span>
                    </button>
                </div>
                </Link>
            </div>
            <div>
                <img className='w-2/3 mx-auto rounded-2xl md:w-full ' src={HeroImage}  alt="my profile" />
            </div>

        </div>
    </div>
  )
}
