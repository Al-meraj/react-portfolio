import React from 'react'

export default function About() {
  return (
    <div name="about"
    className='w-full h-screen bg-black text-white ' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen  '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>
            <p  className='text-xl mt-20' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate exercitationem quas, quod maxime ut optio in voluptatum nobis incidunt repellendus asperiores accusamus commodi id adipisci aliquam, culpa labore aut.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, vel pariatur fugit, assumenda dolorem porro eum repudiandae incidunt repellat laboriosam itaque et corrupti repellendus fugiat nemo minus odio, sunt modi magnam laborum aliquid. Quo adipisci aperiam debitis, possimus error nobis!
            </p>
        </div>
    </div>
  )
}
