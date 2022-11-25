import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";


export default function SocialIcons() {
    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                
                </>
            ),
            href:"https://linkedin.com",
            style:"rounded-tr-md"

        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                
                </>
            ),
            href:"https://github.com",
            
        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                
                </>
            ),
            href:"mailto:almeraj806@gmail.com",
            style: "rounded-br-md"
            
        }
    ]
  return (
    <div className=' z-10 hidden lg:flex fixed flex-col left-0 top-[35%] text-white'>
        <ul>
            {links.map(({id,href,child,style})=>{
                return <li
                className={`flex items-center justify-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
                key={id}
                
                >
                    <a className='flex justify-between w-full items-center ' 
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                        
                    >
                        {child}</a>
                </li>
            })}
        </ul>
    </div>
  )
}
