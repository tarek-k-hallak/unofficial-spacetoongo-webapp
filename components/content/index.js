
export default function Content({ children }) {
    return (
        <section className="bg-primary">
            {children}
        </section>
    )
}

Content.Container = function ContentContainer({ children }) {
    return (
        <div className="flex flex-col gap-20 overflow-x-hidden">
            {children}
        </div>
    )
}
