import { forwardRef } from "react"
import { FaFacebook, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function Form({ children }) {
    return (
        <div className="w-full h-full flex items-center bg-background relative overflow-hidden" >
            {children}
        </div>
    )
}

Form.Container = function FormContainer({ children }) {
    return (
        <div className="w-[95%] max-w-[1100px] max-h-[600px] mx-auto my-14 md:bg-primary flex justify-between rounded-3xl md:border-2 border-white">
            {children}
        </div>
    )
}

Form.Paper = function FormPaper({ children, onSubmit, method }) {
    return (
        <div className='z-10 w-full my-14'>
            <form onSubmit={(event) => onSubmit(event)} method={method}>
                <div className='w-[90%] md:w-[60%] mx-auto flex flex-col items-center '>
                    {children}
                </div>
            </form >
        </div>
    )
}

Form.Title = function FormTitle({ children }) {
    return (
        <h2 className='text-white font-bold text-2xl lg:text-4xl mb-8'>
            {children}
        </h2>
    )
}

Form.Input = function FormInput({ type, name, value, placeholder, onChange }) {
    return (
        <input className='w-full mb-4 h-8 p-2 rounded-lg text-right text-sm lg:text-lg'
            type={type}
            name={name}
            onChange={(event) => onChange(event)}
            value={value}
            placeholder={placeholder} />
    )
}

Form.Submit = forwardRef(function FormSubmit({ children, type, disabled }, ref) {
    return (
        <button className='font-semibold text-sm md:text-base w-[125px] md:w-[140px] h-[30px] lg:h-[35px] rounded-full mt-8 text-white bg-accent hover:opacity-80 transition duration-300 mx-auto'
            type={type}
            disabled={disabled}
            ref={ref}>
            {children}
        </button>
    )
})

Form.Break = function FormBreak({ children }) {
    return (
        <>
            <hr className="border-b-1 w-full mt-16" />
            <span className="text-white -mt-4 px-4 bg-background md:bg-primary">
                {children}
            </span>
        </>
    )
}


Form.SocialContainer = function FormSocialContainer({ children }) {
    return (
        <div className='flex flex-row mt-12 w-full justify-center gap-12'>
            {children}
        </div>
    )
}

Form.Facebook = function FormFacebook() {
    return (
        <button className="">
            <FaFacebook className="text-[40px] text-blue-700" />
        </button>
    )
}

Form.Google = function FormGoogle() {
    return (
        <button className="">
            <FcGoogle className="text-[40px]" />
        </button>
    )
}

Form.Apple = function FormApple() {
    return (
        <button className="">
            <FaApple className="text-[40px] text-white" />
        </button>
    )
}

Form.RegisterLable = function FormRegisterLable({ children }) {
    return (
        <div className='mt-14'>
            {children}
        </div>
    )
}

Form.RegisterText = function FormRegisterText({ children }) {
    return (
        <span className='text-white '>
            {children}
        </span>
    )
}

Form.RegisterButton = function FormRegisterButton({ children }) {
    return (
        <button className='text-white border-b hover:text-accent transition duration-200'>
            {children}
        </button>
    )
}

Form.SliderContaier = function FormSliderContaier({ children }) {
    return (
        <div className="md:block z-0 md:w-[60%] bg-background overflow-hidden rounded-r-3xl">
            {children}
        </div>
    )
}

Form.SliderImages = function FormSliderImages({ }) {
    return (
        <div className="flex flex-row gap-4 rotate-[25deg] -ml-[180px] -mt-[70px] 
                        absolute top-0 right-0 md:relative opacity-10 md:opacity-100">
            <img className='w-[220px] h-[1100px] slider1' src={"assets/images/sections/section-header-slide1.png"} alt="slide1" />
            <img className='w-[190px] h-[900px] slider2' src={"assets/images/sections/section-header-slide2.png"} alt="slide2" />
            <img className='w-[170px] h-[800px] slider3' src={"assets/images/sections/section-header-slide3.png"} alt="slide3" />
        </div>
    )
}