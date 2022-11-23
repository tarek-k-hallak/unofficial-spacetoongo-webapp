
export default function Hero({ children, }) {
    return (
        <section className='bg-background'>
            {children}
        </section>
    )
}

Hero.Container = function HeroContainer({ children }) {
    return (
        <div className={`relative flex flex-col justify-end items-end md:h-[600px] h-[400px]`}>
            {children}
        </div>
    )
}

Hero.Image = function HeroImage({ show_type, show_Id }) {
    return (
        <img className="absolute z-0 h-full w-full"
            src={`/assets/series/${show_type}/${show_Id}/large.jpg`}
            alt="" />
    )
}

Hero.Shadow = function HeroShadow({ }) {
    return (
        <div className="absolute z-10 w-full h-full hero-shadow">
        </div>
    )
}