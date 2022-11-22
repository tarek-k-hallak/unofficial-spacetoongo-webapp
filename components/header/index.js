export default function Header({ children }) {
    return (
        <header className={'z-50 sticky top-0'}>
            {children}
        </header>
    )
}

Header.Container = function HeaderContainer({ children }) {
    return (
        <div className='bg-primary max-h-[50px] md:max-h-[60px] lg:max-h-[70px]'>
            {children}
        </div>
    )
}

