import React from 'react'

export default function Scroller({ children }) {
    return (
        <section className='z-10 xl:-mt-16 mx-2 md:mr-4'>
            {children}
        </section>
    )
}

Scroller.Container = function ScrollerContainer({ children }) {
    return (
        <div className='flex flex-row-reverse items-center gap-[3vw] md:gap-[1.8vw] overflow-scroll'>
            {children}
        </div>
    )
}

