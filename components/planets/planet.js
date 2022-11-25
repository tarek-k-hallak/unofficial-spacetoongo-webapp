import Link from 'next/link'
import React from 'react'

export default function Plant({ children }) {
    return (
        <div className='flex-shrink-0 flex-grow-0 w-[30vw] h-[30vw] md:w-[12vw] md:h-[11vw] '>
            {children}
        </div>
    )
}

Plant.Image = function PlantImage({ type, id, URL }) {
    return (
        <Link href={`/shows/${type}/${id}`} >
            <svg className='h-full w-full'>
                <ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill='#8F1F20' />
            </svg>
            {/* <img className='rounded-md h-full w-full cursor-pointer'
                    src={"URL"} alt={id} /> */}
        </Link>
    )
}