import { forwardRef } from 'react'
import Link from 'next/link'

export default function SlideNav({ children }) {
    return (
        <div className="md:hidden">
            {children}
        </div>
    )
}


SlideNav.Container = forwardRef(function SlideNavContainer({ children }, ref) {
    return (
        <nav className='z-10 h-screen w-screen px-2 fixed top-[40px] right-0 translate-x-full
            bg-background transition duration-500 ease-in-out transform '
            ref={ref}>
            {children}
        </nav>
    )
})

SlideNav.LoginButton = function SlideNavLoginButton({ URL, children }) {
    return (
        <button className={`text-lg w-full h-[35px] mt-8 rounded-lg transition duration-300 bg-primary text-white`}>
            <Link href={URL}>
                {children}
            </Link>
        </button>
    )
}

SlideNav.List = function SlideNavList({ children }) {
    return (
        <ul className='flex flex-col items-end mt-8 bg-primary rounded-lg'>
            {children}
        </ul>
    )
}

SlideNav.Item = function SlideNavItem({ URL, children }) {
    return (
        <li className='text-sm text-white text-right mt-2 mr-2 pb-2 w-[95%] ease-in-out hover:text-hover border-b-[1px] border-white last-of-type:border-0'>
            <Link href={URL}>
                {children}
            </Link>
        </li>
    )
}