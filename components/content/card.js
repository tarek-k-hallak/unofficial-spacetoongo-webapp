import Link from 'next/link'
import React from 'react'

export default function Card({ children }) {
    return (
        <div className='flex-shrink-0 flex-grow-0 rounded-md bg-gray-800 md:first-of-type:mr-[2.4%]
                        w-[40%] md:w-[15.53%]  h-[230px] md:h-[120px] lg:h-[120px]'>
            {children}
        </div>
    )
}

Card.Image = function CardImage({ type, id, URL }) {
    return (
        <Link href={`/shows/${type}/${id}`}>
            <img className='rounded-md h-full w-full cursor-pointer'
                src={"URL"} alt={id} />
        </Link>
    )
}


Card.Meta = function CardMeta({ children }) {
    return (
        <div className='hidden'>
            {children}
        </div>
    )
}

Card.Title = function CardTitle({ children }) {
    return (
        <h2>
            {children}
        </h2>
    )
}

Card.Subtitle = function CardSubtitle({ children }) {
    return (
        <p>
            {children}
        </p>
    )
}

Card.PlayButton = function CardPlayButton({ children }) {
    return (
        <button>
            {children}
        </button>
    )
}

Card.FavButton = function CardFavButton({ children }) {
    return (
        <button >
            {children}
        </button>
    )
}