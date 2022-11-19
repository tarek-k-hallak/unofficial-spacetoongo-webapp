import Link from 'next/link'
import { forwardRef } from 'react'
import { GoSearch } from 'react-icons/go'

export default function NavBar({ children }) {
    return (
        <div className='mx-2 md:mx-4 lg:mx-8'>
            {children}
        </div>
    )
}


NavBar.Container = function NavBarContainer({ children }) {
    return (
        <nav className='flex flex-row-reverse justify-between md:justify-start items-center max-h-[40px] md:max-h-[50px] lg:max-h-[65px]'>
            {children}
        </nav>
    )
}


NavBar.Logo = function NavBarLogo({ URL }) {
    return (
        <div className='z-40 mt-10 md:mt-12 lg:mt-14 ml-0 md:ml-2 lg:ml-4'>
            <Link href={URL} >
                <img className="w-[60px] md:w-[80px] lg:w-[100px]" src="https://spacetoongo.com/assets/img/logo.svg" alt="STGO"></img>
            </Link>
        </div >
    )
}

NavBar.List = function NavBarList({ children }) {
    return (
        <ul className='hidden md:flex flex-row-reverse gap-4'>
            {children}
        </ul>
    )
}

NavBar.Item = function NavBarItem({ URL, children }) {
    return (
        <li className='text-white font-semibold md:text-sm lg:text-base transition duration-150 hover:text-hover cursor-pointer'>
            <Link href={URL} >
                {children}
            </Link>
        </li>
    )
}

NavBar.Search = function NavBarSearch() {
    return (
        <div className='md:ml-4 mr-0 md:mr-auto cursor-pointer'>
            <GoSearch className='fill-white hover:fill-hover' />
        </div>
    )
}

NavBar.Login = function NavBarLogin({ URL, children }) {
    return (
        <div className='hidden md:block ml-4 items-end text-base transition duration-300 text-white  hover:text-hover'>
            <Link href={URL}>
                {children}
            </Link>
        </div>
    )
}

NavBar.SubscrptionButton = function NavBarSubscrptionButton({ URL, children }) {
    return (
        <button className='hidden md:block items-end font-semibold w-28 h-8 bg-accent rounded-full text-base transition duration-200 
            text-white hover:opacity-60'>
            <Link href={URL}>
                {children}
            </Link>
        </button>
    )
}

NavBar.Hamburger = function NavBarHamburger({ children, toggleSlideNav }) {
    return (
        <button className='md:hidden w-6 h-5 flex flex-col justify-between cursor-pointer'
            onClick={() => toggleSlideNav()}>
            {children}
        </button>
    )
}

NavBar.HamburgerSlice = forwardRef(function NavBarHamburgerSlice({ }, ref) {
    return (
        <div ref={ref} className='w-full h-1 bg-white rounded-full transition duration-500 ease-in-out'></div>
    )
})