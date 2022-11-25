import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

export default function Header() {

 const Links = [
    {
        id:1,
        link: 'home'
    },
    {
        id:2,
        link: 'experience'
    },
    {
        id:3,
        link: 'portfolio'
    },
    {
        id:4,
        link: 'about'
    },
    {
        id:5,
        link: 'contact'
    }
 ]

 const [nav,setNav] = useState(false)




  return (
    <div className=" bg-black w-full px-4 p-6 items-center flex text-white justify-between  " >
        <div>
            <h1 className="text-4xl font-bold font-signature text-white " >Mostafizu</h1>
        </div>
        <ul className='md:flex hidden' >
            {Links.map(({id,link})=>{
                return <li key={id} className=' capitalize font-medium px-4 cursor-pointer text-gray-400 hover:scale-110 duration-300 hover:text-white  ' >
                    <Link to={link} smooth  duration={500}>
                         {link}
                    </Link>
                </li>
            })
                
            }
        </ul>
        <div onClick={()=>setNav(!nav)} className=' text-gray-400 cursor-pointer z-50 p-4 md:hidden ' >
            {!nav ? <FaBars size={25}/> : <FaTimes size={25}/>    }
        </div>


        
            
        {
            nav && <ul className='flex flex-col absolute top-0 left-0 bg-black h-screen p-8 md:hidden' >
                <h1 className="text-4xl font-bold font-signature text-white my-8 cursor-pointer " >Mostafizur</h1>


            {Links.map(({id,link})=>{
                return <li key={id} className=' capitalize font-medium cursor-pointer text-gray-400 hover:scale-110 duration-300 hover:text-white m-5 w-full  ' >
                    <Link onClick={()=> setNav(!nav)} to={link} smooth  duration={500}>{link}</Link>
                </li>
            })
                
            }

            
            </ul>
        }


            

        





    </div>
  )
}
