
export default function Terms({ children }) {
    return (
        <div className="w-full h-full mt-24">
            {children}
        </div>
    )
}

Terms.Container = function TermsContainer({ children }) {
    return (
        <ul className='flex flex-row-reverse flex-wrap justify-center gap-8'>
            {children}
        </ul>
    )
}

Terms.Item = function TermsItem({ children }) {
    return (
        <li className='text-white font-bold text-sm md:text-lg cursor-pointer transform duration-100 hover:text-accent hover:border-accent'>
            {children}
        </li>
    )
}



