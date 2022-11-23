import { forwardRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export default function Slider({ children }) {
    return (
        <div className="mr-2">
            {children}
        </div>
    )
}

Slider.Title = function SliderTitle({ children }) {
    return (
        <h1 className="text-2xl font-bold text-white text-right mb-2 mr-2 md:mr-8">
            {children}
        </h1>
    )
}

Slider.Container = function SliderContainer({ children, toggleArrows }) {
    return (
        <div className="flex flex-row-reverse"
            onMouseEnter={() => toggleArrows(true)}
            onMouseLeave={() => toggleArrows(false)}>
            {children}
        </div>
    )
}


Slider.Content = function SliderContent({ children }) {
    return (
        <div className="z-10 flex flex-row-reverse gap-[0.5%] md:gap-[0.27%] w-full md:w-[95%] mx-auto overflow-x-scroll">
            {children}
        </div>
    )
}

Slider.RightArrow = forwardRef(function SliderRightArrow({row }, ref) {
    return (
        <button className='z-10 bg-slate-500 w-[2.5%] hidden md:flex justify-center items-center bg-opacity-50 rounded-l-md'
                ref={ref}>
            <SlArrowRight className='text-white' />
        </button>
    )
})

Slider.LeftArrow = forwardRef(function SliderLeftArrow({ }, ref) {
    return (
        <button className='z-10 bg-slate-500 w-[2.5%] hidden md:flex justify-center items-center bg-opacity-50 rounded-r-md'
                ref={ref}>
            <SlArrowLeft className='text-white ' />
        </button>
    )
})


