
export default function Hero({ children, ...restProps }) {
    return (
        <section className='-mt-[65px] hero-image'>
            {children}
        </section>
    )
}

Hero.Container = function HeroContainer({ children, ...restProps }) {
    return (
        <div className="flex flex-col items-center md:items-end justify-end min-h-[500px] md:min-h-[40vw] ">
            {children}
        </div>
    )
}
