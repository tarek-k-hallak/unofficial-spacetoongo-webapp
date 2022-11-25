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
        <h1 className="text-2xl font-bold text-white text-right mb-2 mr-2 md:mr-8">
            {children}
        </h1>
    )
}

Slider.Container = function SliderContainer({ children, handleHover, id }) {
    return (
        <div className="relative flex flex-row-reverse"
            onMouseEnter={() => handleHover(id, true)}
            onMouseLeave={() => handleHover(id, false)}>
            {children}
        </div>
    )
}

Slider.Content = function SliderContent({ children }) {
    return (
        <div className="z-0 flex flex-row-reverse gap-[0.5%] md:gap-[0.4%] w-full mx-auto overflow-x-hidden">
            {children}
        </div>
    )
}

Slider.RightArrow = forwardRef(function SliderRightArrow({ }, ref) {
    return (
        <div className='hidden absolute right-0 z-10 w-[2%] h-full bg-slate-500 bg-opacity-50 rounded-r-md items-center' ref={ref}>
            <button className='flex justify-center items-center w-full h-full'>
                <SlArrowRight className='text-white' />
            </button>
        </div>
    )
})

Slider.LeftArrow = forwardRef(function SliderLeftArrow({ }, ref) {
    return (
        <div className='hidden absolute left-0 z-10 w-[2%] h-full bg-slate-500 bg-opacity-50 rounded-r-md items-center' ref={ref}>
            <button className='flex justify-center items-center w-full h-full'>
                <SlArrowLeft className='text-white ' />
            </button>
        </div>
    )
})


