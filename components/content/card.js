import React from 'react'

export default function Card({ children }) {
    return (
        <div className='flex-shrink-0 flex-grow-0 aspect-w-16 aspect-h-1 w-[33%] md:w-[19.5%] lg:w-[13.8%] h-[220px] md:h-[120px] rounded-md bg-gray-800'>
            {children}
        </div>
    )
}

Card.Image = function CardImage({ item }) {
    return (
        <img className='rounded-md h-full w-full cursor-pointer'
            src={"item.imageURL"} alt={item.id} />
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