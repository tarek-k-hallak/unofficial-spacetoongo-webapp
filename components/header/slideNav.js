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
        <nav className='z-10 h-screen w-screen fixed right-0 translate-x-full top-[50px]
            bg-background transition duration-500 ease-in-out transform '
            ref={ref}>
            {children}
        </nav>
    )
})

SlideNav.TopLable = function SlideNavTopLable({ URL, children }) {
    return (
        <div className="bg-primary w-full">
            <div className='pt-10 pb-4 mb-4'>
                {children}
            </div>
        </div>
    )
}

SlideNav.SubscrptionButton = function SlideNavSubscrptionButton({ URL, children }) {
    return (
        <Link href={URL} className="w-full">
            <div className='text-sm w-[90%] m-auto leading-0 py-1 rounded-full  bg-accent  text-white text-center'>
                {children}
            </div>
        </Link>
    )
}


SlideNav.LoginButton = function SlideNavLoginButton({ URL, children }) {
    return (
        <Link href={URL} className="w-full">
            <div className='text-sm w-[90%] m-auto py-1 mt-2  rounded-full border-2 border-accent bg-background text-white text-center'>
                {children}
            </div>
        </Link>
    )
}


SlideNav.List = function SlideNavList({ children }) {
    return (
        <ul className='flex flex-col items-end mx-2 mb-4 bg-primary rounded-lg'>
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

SlideNav.Title = function SlideNavTitle({ children }) {
    return (
        <div className='text-gray-500 font-semibold text-right mr-4 mb-2'>
            {children}
        </div>
    )
}
