import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa'

export default function ContactUs({ children }) {
    return (
        <div className='my-8 w-full h-full'>
            {children}
        </div>
    )
}

ContactUs.Container = function ContactUsContainer({ children }) {
    return (
        <div className='flex flex-row-reverse items-center justify-center gap-4 md:gap-20'>
            {children}
        </div>
    )
}

ContactUs.Logo = function ContactUsLogo({ URL }) {
    return (
        <div className='w-[100px] md:w-[120px] lg:w-[150px]'>
            <Link href={URL} >
                <img className="w-full h-full" src="https://spacetoongo.com/assets/img/logo.svg" alt="STGO"></img>
            </Link>
        </div >
    )
}


ContactUs.Facebook = function ContactUsFacebook({ URL }) {
    return (
        <div className='cursor-pointer'>
            <Link href={URL}>
                <FaFacebook className='fill-white hover:fill-hover text-[8vw] sm:text-[40px]' />
            </Link>
        </div>
    )
}

ContactUs.Instagram = function ContactUsInstagram({ URL }) {
    return (
        <div className='cursor-pointer'>
            <Link href={URL}>
                <FaInstagram className='fill-white hover:fill-hover text-[8vw] sm:text-[40px]' />
            </Link>
        </div>
    )
}

ContactUs.Twitter = function ContactUsTwitter({ URL }) {
    return (
        <div className='cursor-pointer'>
            <Link href={URL}>
                <FaTwitter className='fill-white hover:fill-hover text-[8vw] sm:text-[40px]' />
            </Link>
        </div>
    )
}


ContactUs.Youtube = function ContactUsYoutube({ URL }) {
    return (
        <div className='cursor-pointer'>
            <Link href={URL}>
                <FaYoutube className='fill-white hover:fill-hover text-[8vw] sm:text-[40px]' />
            </Link>
        </div>
    )
}

ContactUs.Tiktok = function ContactUsTiktok({ URL }) {
    return (
        <div className='cursor-pointer'>
            <Link href={URL}>
                <FaTiktok className='fill-white hover:fill-hover text-[8vw] sm:text-[40px]' />
            </Link>
        </div>
    )
}
