
export default function Footer({ children }) {
    return (
        <div className='w-full h-full bg-primary'>
            {children}
        </div>
    )
}

Footer.Container = function FooterContainer({children}) {
    return (
        <div className="flex flex-col gap-4 items-center max-w-[1440px] mx-2">
            {children}
        </div>
    )
}
