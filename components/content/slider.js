import { forwardRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export default function Slider({ children }) {
    return (
        <div className="">
            {children}
        </div>
    )
}

Slider.Title = function SliderTitle({ children }) {
    return (
        <h1 className="text-2xl text-white text-right mb-4 ">
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
        <div className="flex flex-row-reverse gap-[0.5%] w-full md:w-[95%] mx-auto">
            {children}
        </div>
    )
}

Slider.RightArrow = forwardRef(function SliderRightArrow({row }, ref) {
    return (
        <button className='bg-slate-500 z-10 w-[2.5%] flex justify-center items-center bg-opacity-50 rounded-l-md'
                ref={ref}>
            <SlArrowRight className='text-white' />
        </button>
    )
})

Slider.LeftArrow = forwardRef(function SliderLeftArrow({ }, ref) {
    return (
        <button className='bg-slate-500 z-10 w-[2.5%] flex justify-center items-center bg-opacity-20 rounded-r-md'
                ref={ref}>
            <SlArrowLeft className='text-white ' />
        </button>
    )
})


