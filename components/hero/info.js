export default function Info({ children, ...restProps }) {
    return (
        <div className="justify-self-end w-[40%] mb-4 xl:mb-20 md:mr-4 lg:mr-8 ">
            {children}
        </div>
    )
}

Info.Container = function InfoContainer({ children, ...restProps }) {
    return (
        <div className="hidden md:flex flex-col items-end">
            {children}
        </div>
    )
}


Info.Title = function InfoTitle({ children, ...restProps }) {
    return (
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl text-white text-right">
            {children}
        </h1>
    )
}

Info.SubTitle = function InfoSubtitle({ children, ...restProps }) {
    return (
        <p className='hidden lg:block text-xs md:text-sm lg:text-lg text-right text-white mt-8'>
            {children}
        </p>
    )
}

Info.Button = function InfoButton({ children, ...restProps }) {
    return (
        <button className='w-24 h-10 bg-accent text-white rounded-xl mt-4 hover:opacity-50'>
            {children}
        </button>
    )
}