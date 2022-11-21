import { forwardRef } from "react"
import { FaFacebook, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function Form({ children }) {
    return (
        <div className="w-full h-full flex items-center bg-background">
            {children}
        </div>
    )
}

Form.Container = function FormContainer({ children }) {
    return (
        <div className="w-[95%] md:w-[80%] max-w-[1000px] mx-auto my-14 bg-primary flex justify-between rounded-3xl border-2 border-white">
            {children}
        </div>
    )
}

Form.Image = function FormImage({ item }) {
    return (
        <div className="hidden md:block w-[40%] rounded-r-3xl">
            <img className="w-full h-full rounded-r-3xl" src={item.picture} alt={item.title} />
        </div>
    )
}

Form.Paper = function FormPaper({ children, onSubmit, method }) {
    return (
        <div className='w-full my-8 md:mt-14'>
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
        <h2 className='text-white font-bold text-lg lg:text-4xl mb-8'>
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
            <span className="text-white -mt-4 px-4 bg-primary">
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