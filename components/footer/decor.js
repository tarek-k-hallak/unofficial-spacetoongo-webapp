export default function Decor({ children, ...restProps }) {
    return (
        <div className='decor -mb-[200px]'>
            <svg className='w-full h-[200px]'>
                <ellipse cx="50%" cy="0" rx="55%" ry="100%" fill='#f4f3ef' />
            </svg>
        </div>
    )
}